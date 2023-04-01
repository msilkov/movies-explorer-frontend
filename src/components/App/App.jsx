import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { APP_CLASSES } from '../../utils/constants';
import * as moviesApi from '../../utils/MoviesApi';
import * as mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function App() {
	const navigate = useNavigate();
	const location = useLocation();

	const [isLoggedIn, setLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [foundMovies, setFoundMovies] = useState([]);
	const [savedMovies, setSavedMovies] = useState([]);
	const [isShortMoviesChecked, setIsShortMoviesChecked] = useState(false);
	const [isShortSavedMoviesChecked, setIsShortSavedMoviesChecked] =
		useState(false);
	const [currentUser, setCurrentUser] = useState({});

	const IsSavedMoviesPath = location.pathname === '/saved-movies';
	const IsMoviesPath = location.pathname === '/movies';
	const lastVisitedPage = localStorage.getItem('lastVisitedPage');

	useEffect(() => {
		localStorage.setItem('lastVisitedPage', location.pathname);
	}, [location.pathname]);

	useEffect(() => {
		mainApi
			.getUserInfo()
			.then((userData) => {
				if (userData) {
					setLoggedIn(true);
					setCurrentUser(userData);
					navigate(lastVisitedPage);
				}
			})
			.catch((err) => {
				console.log(`Что-то пошло не так: ${err}`);
			});
	}, []);

	useEffect(() => {
		if (isLoggedIn) {
			Promise.all([mainApi.getUserInfo(), mainApi.getSavedMovies()])
				.then(([userData, savedMovies]) => {
					setCurrentUser(userData);
					setSavedMovies(savedMovies);
					const foundMoviesFromStorage = JSON.parse(
						localStorage.getItem('foundMovies')
					);
					setFoundMovies(foundMoviesFromStorage || []);

					const isShortMoviesCheckedFromStorage = JSON.parse(
						localStorage.getItem('moviesCheckbox')
					);

					setIsShortMoviesChecked(isShortMoviesCheckedFromStorage || false);

					const isShortSavedMoviesCheckedFromStorage = JSON.parse(
						localStorage.getItem('savedMoviesCheckbox')
					);

					setIsShortSavedMoviesChecked(
						isShortSavedMoviesCheckedFromStorage || false
					);
				})
				.catch((err) => {
					console.log(`Ошибка при загрузке данных с сервера: ${err}`);
				});
		}
	}, [isLoggedIn]);

	useEffect(() => {
		setIsError(false);
		setErrorMessage('');
	}, [location.pathname]);

	const handleRegister = (name, email, password) => {
		mainApi
			.register(name, email, password)
			.then(() => {
				handleLogin(email, password);
			})
			.catch((err) => {
				console.log(`Что-то пошло не так: ${err}`);
			});
	};

	const handleLogin = (email, password) => {
		mainApi
			.login(email, password)
			.then((userData) => {
				if (!userData) {
					return Promise.reject('There is no User data!');
				}
				setLoggedIn(true);
				navigate('/movies');
			})
			.catch((err) => {
				console.log(`Что-то пошло не так: ${err}`);
			});
	};

	const handleLogout = () => {
		mainApi
			.logout()
			.then(() => {
				setLoggedIn(false);
				setIsLoading(false);
				setIsError(false);
				setErrorMessage('');
				setFoundMovies([]);
				setSavedMovies([]);
				setIsShortMoviesChecked(false);
				setIsShortSavedMoviesChecked(false);
				setCurrentUser({});
				localStorage.clear();
				navigate('/');
			})
			.catch((err) => {
				console.log(`Что-то пошло не так: ${err}`);
			});
	};

	const handleUpdateUserInfo = (name, email) => {
		mainApi
			.patchUserInfo(name, email)
			.then((userData) => {
				setCurrentUser(userData);
			})
			.catch((err) => {
				console.log(`Ошибка при загрузке данных пользователя: ${err}`);
			});
	};

	const handleSaveMovie = (movie) => {
		mainApi
			.addSavedMovie(movie)
			.then((movieData) => {
				setSavedMovies([movieData, ...savedMovies]);
			})
			.catch((err) => {
				console.log(`Что-то пошло не так: ${err}`);
			});
	};

	const handleDeleteMovie = (movie) => {
		const deletedMovie = savedMovies.find(
			(item) => item.movieId === movie.movieId
		);
		mainApi
			.deleteSavedMovie(deletedMovie._id)
			.then(() => {
				const updatedSavedMovies = savedMovies.filter(
					(item) => item._id !== deletedMovie._id
				);
				setSavedMovies(updatedSavedMovies);
			})
			.catch((err) => {
				console.log(`Что-то пошло не так: ${err}`);
			});
	};

	const filterShortMovies = (movies) => {
		if (
			(!isShortMoviesChecked && IsMoviesPath) ||
			(!isShortSavedMoviesChecked && IsSavedMoviesPath)
		) {
			return movies;
		}
		return movies.filter((movie) => movie.duration <= 40);
	};

	const handleMoviesFilter = (moviesArray, newSearchQuery) => {
		const filteredMovies = filterShortMovies(moviesArray).filter((movie) => {
			const name = movie.nameRU.toLowerCase();
			const search = newSearchQuery.toLowerCase();
			return name.includes(search);
		});
		if (filteredMovies.length === 0) {
			setIsError(true);
			setErrorMessage('Ничего не найдено');
			setFoundMovies(filteredMovies);
			localStorage.setItem('foundMovies', JSON.stringify(filteredMovies));
			setTimeout(() => {
				setIsError(false);
				setErrorMessage('');
			}, 2000);
		} else {
			setIsError(false);
			setErrorMessage('');
			setFoundMovies(filteredMovies);
			localStorage.setItem('foundMovies', JSON.stringify(filteredMovies));
		}
	};
	const handleChangeFilterCheckbox = () => {
		if (IsMoviesPath) {

			setIsShortMoviesChecked(!isShortMoviesChecked);
			localStorage.setItem('moviesCheckbox', !isShortMoviesChecked);
			const foundMoviesFromStorage = JSON.parse(
				localStorage.getItem('foundMovies')
			);

			if (isShortMoviesChecked && foundMoviesFromStorage) {
				const filteredMovies = foundMoviesFromStorage.filter(
					(movie) => movie.duration < 40
				);
				setFoundMovies(filteredMovies);
				localStorage.setItem('foundMovies', JSON.stringify(filteredMovies));
			}
			const userSearchQueryFromStorage = JSON.parse(
				localStorage.getItem('searchQuery')
			);
			const storedInitialMovies = JSON.parse(
				localStorage.getItem('initialMovies')
			);
			handleMoviesFilter(storedInitialMovies, userSearchQueryFromStorage);


		} else if (IsSavedMoviesPath) {
			setIsShortSavedMoviesChecked(!isShortSavedMoviesChecked);
			localStorage.setItem('savedMoviesCheckbox', !isShortSavedMoviesChecked);
		}
	};

	const handleSearch = (newSearchQuery) => {
		if (!JSON.parse(localStorage.getItem('initialMovies'))) {
			setIsLoading(true);
			moviesApi
				.getMovies()
				.then((movies) => {
					localStorage.setItem('initialMovies', JSON.stringify(movies));
				})
				.then(() => {
					const storedInitialMovies = JSON.parse(
						localStorage.getItem('initialMovies')
					);
					handleMoviesFilter(storedInitialMovies, newSearchQuery);

					localStorage.setItem('searchQuery', JSON.stringify(newSearchQuery));
				})
				.catch((err) => {
					console.log(`Что-то пошло не так: ${err}`);
				})
				.finally(() => {
					setIsLoading(false);
				});
		} else if (JSON.parse(localStorage.getItem('initialMovies'))) {
			const storedInitialMovies = JSON.parse(
				localStorage.getItem('initialMovies')
			);
			handleMoviesFilter(storedInitialMovies, newSearchQuery);
			localStorage.setItem('searchQuery', JSON.stringify(newSearchQuery));
		}
	};

	return (
		<div className="app-content">
			<CurrentUserContext.Provider value={currentUser}>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Header className={APP_CLASSES} loggedIn={isLoggedIn} />
								<Main className={APP_CLASSES} />
								<Footer className={APP_CLASSES} />
							</>
						}
					></Route>
					<Route
						path="/movies"
						element={
							<ProtectedRoute loggedIn={isLoggedIn}>
								<>
									<Header className={APP_CLASSES} loggedIn={isLoggedIn} />
									<Movies
										appClassNames={APP_CLASSES}
										isSavedMoviesPath={IsSavedMoviesPath}
										foundMovies={foundMovies}
										savedMovies={savedMovies}
										onSearchSubmit={handleSearch}
										onFilterChange={handleChangeFilterCheckbox}
										// onFilterClick={handleClickFilterCheckbox}
										// isFilterChecked={isShortMoviesChecked}
										isLoading={isLoading}
										isError={isError}
										errorMessage={errorMessage}
										onSave={handleSaveMovie}
										onDelete={handleDeleteMovie}
									/>
									<Footer className={APP_CLASSES} />
								</>
							</ProtectedRoute>
						}
					></Route>
					<Route
						path="/saved-movies"
						element={
							<ProtectedRoute loggedIn={isLoggedIn}>
								<>
									<Header className={APP_CLASSES} loggedIn={isLoggedIn} />
									<Movies
										appClassNames={APP_CLASSES}
										isSavedMoviesPath={IsSavedMoviesPath}
										foundMovies={foundMovies}
										savedMovies={savedMovies}
										onSearchSubmit={handleSearch}
										onFilterChange={handleChangeFilterCheckbox}
										// onFilterClick={handleClickFilterCheckbox}
										// isFilterChecked={isShortMoviesChecked}
										isLoading={isLoading}
										isError={isError}
										errorMessage={errorMessage}
										onSave={handleSaveMovie}
										onDelete={handleDeleteMovie}
									/>
									<Footer className={APP_CLASSES} />
								</>
							</ProtectedRoute>
						}
					></Route>

					<Route
						path="/profile"
						element={
							<ProtectedRoute loggedIn={isLoggedIn}>
								<>
									<Header className={APP_CLASSES} loggedIn={isLoggedIn} />
									<Profile
										className={APP_CLASSES}
										onLogout={handleLogout}
										onDataSave={handleUpdateUserInfo}
									/>
								</>
							</ProtectedRoute>
						}
					></Route>

					<Route
						path="/signup"
						element={
							<Register onRegister={handleRegister} className={APP_CLASSES} />
						}
					></Route>

					<Route
						path="/signin"
						element={<Login onLogin={handleLogin} className={APP_CLASSES} />}
					></Route>

					<Route
						path="*"
						element={<NotFoundPage className={APP_CLASSES} />}
					></Route>
				</Routes>
			</CurrentUserContext.Provider>
		</div>
	);
}
