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
	const [isSuccess, setIsSuccess] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	const [foundMovies, setFoundMovies] = useState([]);
	const [savedMovies, setSavedMovies] = useState([]);
	const [initialSavedMovies, setInitialSavedMovies] = useState([]);
	const [savedMoviesSubset, setSavedMoviesSubset] = useState([]);
	const [isShortMoviesChecked, setIsShortMoviesChecked] = useState(false);
	const [isShortSavedMoviesChecked, setIsShortSavedMoviesChecked] =
		useState(false);
	const [currentUser, setCurrentUser] = useState({});

	const IsSavedMoviesPath = location.pathname === '/saved-movies';
	const IsMoviesPath = location.pathname === '/movies';
	const IsLoginPath = location.pathname === '/signin';
	const IsRegisterPath = location.pathname === '/signup';

	useEffect(() => {
		if (isLoggedIn && (IsLoginPath || IsRegisterPath)) {
			navigate('/');
		}
	}, [isLoggedIn, IsLoginPath, IsRegisterPath, navigate]);

	useEffect(() => {
		mainApi
			.getUserInfo()
			.then((userData) => {
				if (userData) {
					setLoggedIn(true);
					setCurrentUser(userData);
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
					setInitialSavedMovies(savedMovies);
					const foundMoviesFromStorage = JSON.parse(
						localStorage.getItem('foundMovies')
					);
					setFoundMovies(foundMoviesFromStorage || []);

					const savedMoviesSubsetFromStorage = JSON.parse(
						localStorage.getItem('savedMoviesSubset')
					);
					setSavedMoviesSubset(savedMoviesSubsetFromStorage || []);

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
		if (isLoggedIn && IsSavedMoviesPath) {
			mainApi
				.getSavedMovies()
				.then((savedMovies) => {
					setSavedMovies(savedMovies);
				})
				.catch((err) => {
					console.log(`Ошибка при загрузке данных с сервера: ${err}`);
				});
		}
	}, [isLoggedIn, IsSavedMoviesPath]);

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
				setIsSuccess(false);
				setErrorMessage('');
				setSuccessMessage('');
				setFoundMovies([]);
				setSavedMovies([]);
				setSavedMoviesSubset([]);
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
				setIsSuccess(true);
				setSuccessMessage('Данные успешно изменены');
			})
			.catch((err) => {
				console.log(`Ошибка при загрузке данных пользователя: ${err}`);
				setIsError(true);
				setErrorMessage('Ошибка при обновлении данных пользователя');
			})
			.finally(() => {
				setTimeout(() => {
					setIsSuccess(false);
					setSuccessMessage('');
					setIsError(false);
					setErrorMessage('');
				}, 2000);
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
		const shortMovies = movies.filter((movie) => movie.duration <= 40);
		return shortMovies;
	};

	const filterMovies = (moviesArray, newSearchQuery) => {
		const filteredMovies = filterShortMovies(moviesArray).filter((movie) => {
			const name = movie.nameRU.toLowerCase();
			const search = newSearchQuery.toLowerCase();
			return name.includes(search);
		});
		return filteredMovies;
	};

	const handleMoviesFilter = (moviesArray, newSearchQuery) => {
		const filteredMovies = filterMovies(moviesArray, newSearchQuery);

		setIsError(filteredMovies.length === 0);
		setErrorMessage(filteredMovies.length === 0 ? 'Ничего не найдено' : '');
		setFoundMovies(filteredMovies);
		localStorage.setItem('foundMovies', JSON.stringify(filteredMovies));
		if (filteredMovies.length === 0) {
			setTimeout(() => {
				setIsError(false);
				setErrorMessage('');
			}, 2000);
		}
	};

	const handleSavedMoviesFilter = (moviesArray, newSearchQuery) => {
		const filteredMovies = filterMovies(moviesArray, newSearchQuery);

		setIsError(filteredMovies.length === 0);
		setErrorMessage(filteredMovies.length === 0 ? 'Ничего не найдено' : '');
		 setSavedMovies(filteredMovies);

		if (filteredMovies.length === 0) {
			setTimeout(() => {
				setIsError(false);
				setErrorMessage('');
			}, 2000);
		}
	};

	const handleChangeMoviesFilterCheckbox = () => {
		setIsShortMoviesChecked(!isShortMoviesChecked);

		localStorage.setItem('moviesCheckbox', !isShortMoviesChecked);

		const checkboxValue = JSON.parse(localStorage.getItem('moviesCheckbox'));
		const moviesFromStorage = JSON.parse(localStorage.getItem('foundMovies'));
		const searchQueryFromStorage = JSON.parse(
			localStorage.getItem('searchQuery')
		);
		const initialMoviesFromStorage = JSON.parse(
			localStorage.getItem('initialMovies')
		);

		let filteredMovies = checkboxValue
			? moviesFromStorage.filter((movie) => movie.duration < 40)
			: initialMoviesFromStorage.filter((movie) => {
					const name = movie.nameRU.toLowerCase();
					const search = searchQueryFromStorage.toLowerCase();
					return name.includes(search);
			  });
		setIsError(filteredMovies.length === 0);
		setErrorMessage(filteredMovies.length === 0 ? 'Ничего не найдено' : '');
		if (filteredMovies.length === 0) {
			setTimeout(() => {
				setIsError(false);
				setErrorMessage('');
			}, 2000);
		}

		setFoundMovies(filteredMovies);
		localStorage.setItem('foundMovies', JSON.stringify(filteredMovies));
	};

	const handleChangeSavedMoviesFilterCheckbox = () => {
		setIsShortSavedMoviesChecked(!isShortSavedMoviesChecked);
		localStorage.setItem('savedMoviesCheckbox', !isShortSavedMoviesChecked);
		const checkboxValue = JSON.parse(
			localStorage.getItem('savedMoviesCheckbox')
		);
		const filteredMovies = checkboxValue
			? savedMovies.filter((movie) => movie.duration < 40)
			: savedMovies;

		setIsError(filteredMovies.length === 0);
		setErrorMessage(filteredMovies.length === 0 ? 'Ничего не найдено' : '');
		if (filteredMovies.length === 0) {
			setTimeout(() => {
				setIsError(false);
				setErrorMessage('');
			}, 2000);
		}

		setSavedMoviesSubset(filteredMovies);
		localStorage.setItem('savedMoviesSubset', JSON.stringify(filteredMovies));
	};

	const handleMoviesSearch = (newSearchQuery) => {
		const storedInitialMovies = JSON.parse(
			localStorage.getItem('initialMovies')
		);
		if (!storedInitialMovies) {
			setIsLoading(true);
			moviesApi
				.getMovies()
				.then((movies) => {
					localStorage.setItem('initialMovies', JSON.stringify(movies));
					handleMoviesFilter(movies, newSearchQuery);
				})
				.catch((err) => {
					console.log(`Что-то пошло не так: ${err}`);
				})
				.finally(() => {
					setIsLoading(false);
				});
		} else {
			handleMoviesFilter(storedInitialMovies, newSearchQuery);
		}
		localStorage.setItem('searchQuery', JSON.stringify(newSearchQuery));
	};

	const handleSavedMoviesSearch = (newSearchQuery) => {
		setIsLoading(true);
		mainApi
			.getSavedMovies()
			.then((movies) => {
				handleSavedMoviesFilter(movies, newSearchQuery);
			})
			.catch((err) => {
				console.log(`Что-то пошло не так: ${err}`);
			})
			.finally(() => {
				setIsLoading(false);
			});
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
										savedMoviesSubset={savedMoviesSubset}
										onMoviesSearchSubmit={handleMoviesSearch}
										onSavedMoviesSearchSubmit={handleSavedMoviesSearch}
										onMoviesFilterChange={handleChangeMoviesFilterCheckbox}
										onSavedMoviesFilterChange={
											handleChangeSavedMoviesFilterCheckbox
										}
										isLoading={isLoading}
										isError={isError}
										errorMessage={errorMessage}
										successMessage={successMessage}
										isSuccess={isSuccess}
										onSave={handleSaveMovie}
										onDelete={handleDeleteMovie}
										isShortSavedMoviesChecked={isShortSavedMoviesChecked}
										initialSavedMovies={initialSavedMovies}
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
										savedMoviesSubset={savedMoviesSubset}
										onMoviesSearchSubmit={handleMoviesSearch}
										onSavedMoviesSearchSubmit={handleSavedMoviesSearch}
										onMoviesFilterChange={handleChangeMoviesFilterCheckbox}
										onSavedMoviesFilterChange={
											handleChangeSavedMoviesFilterCheckbox
										}
										isLoading={isLoading}
										isError={isError}
										errorMessage={errorMessage}
										onSave={handleSaveMovie}
										onDelete={handleDeleteMovie}
										isShortSavedMoviesChecked={isShortSavedMoviesChecked}
										initialSavedMovies={initialSavedMovies}
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
										isError={isError}
										isSuccess={isSuccess}
										errorMessage={errorMessage}
										successMessage={successMessage}
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
