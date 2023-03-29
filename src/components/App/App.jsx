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
import { appClasses } from '../../utils/constants';
import * as moviesApi from '../../utils/MoviesApi';
import * as mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function App() {
	const navigate = useNavigate();
	const [isLoggedIn, setLoggedIn] = useState(false);

	const location = useLocation();
	const SavedMoviesPath = location.pathname === '/saved-movies';

	const [initialMovies, setInitialMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [foundMovies, setFoundMovies] = useState([]);
	const [savedMovies, setSavedMovies] = useState([]);
	const [isShortMoviesChecked, setShortMoviesChecked] = useState(false);
	const [userSearchQuery, setUserSearchQuery] = useState('');
	const [currentUser, setCurrentUser] = useState({});

	useEffect(() => {
		mainApi
			.getUserInfo()
			.then((user) => {
				if (user) {
					setLoggedIn(true);
					navigate(location.pathname);
				}
			})
			.catch((err) => {
				console.log(`Что-то пошло не так: ${err}`);
			});
	}, [navigate, location.pathname]);

	useEffect(() => {
		if (isLoggedIn) {
			Promise.all([
				mainApi.getUserInfo(),
				mainApi.getSavedMovies(),
				moviesApi.getMovies(),
			])
				.then(([userData, savedMovies, movies]) => {
					setCurrentUser(userData);
					setSavedMovies(savedMovies);
					setInitialMovies(movies);
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
				navigate('/signin');
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

	const handleFilterCheckBox = () => {
		setShortMoviesChecked(!isShortMoviesChecked);
	};

	const filterShortMovies = (movies) => {
		if (!isShortMoviesChecked) return movies;
		return movies.filter((movie) => movie.duration <= 40);
	};

	const handleFoundNothing = (movies) => {
		if (movies.length === 0) {
			setIsError(true);
			setErrorMessage('Ничего не найдено');
			setFoundMovies([]);
		} else {
			setFoundMovies(movies);
			setIsError(false);
			setErrorMessage('');
		}
	};

	const handleMoviesFilter = (moviesArray, newSearchQuery) => {
		const filteredMovies = filterShortMovies(moviesArray).filter((movie) => {
			const name = movie.nameRU.toLowerCase();
			const description = movie.description.toLowerCase();
			const search = newSearchQuery.toLowerCase();
			return name.includes(search) || description.includes(search);
		});
		handleFoundNothing(filteredMovies);
	};

	const handleSearch = (newSearchQuery) => {
		setIsError(false);
		setIsLoading(true);
		setTimeout(() => {
			handleMoviesFilter(initialMovies, newSearchQuery);
			setIsLoading(false);
			setUserSearchQuery(newSearchQuery);
		}, 1500);
	};
	const userSearchData = {
		movies: foundMovies,
		filter: isShortMoviesChecked,
		searchQuery: userSearchQuery,
	};
	localStorage.setItem('storedUserSearch', JSON.stringify(userSearchData));

	return (
		<div className="app-content">
			<CurrentUserContext.Provider value={currentUser}>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Header className={appClasses} loggedIn={isLoggedIn} />
								<Main className={appClasses} />
								<Footer className={appClasses} />
							</>
						}
					></Route>
					<Route
						path="/movies"
						element={
							<ProtectedRoute loggedIn={isLoggedIn}>
								<>
									<Header className={appClasses} loggedIn={isLoggedIn} />
									<Movies
										appClassNames={appClasses}
										isSavedMoviesPath={SavedMoviesPath}
										foundMovies={foundMovies}
										onSearchChange={handleSearch}
										onFilterChange={handleFilterCheckBox}
										isFilterChecked={isShortMoviesChecked}
										isLoading={isLoading}
										isError={isError}
										errorMessage={errorMessage}
									/>
									<Footer className={appClasses} />
								</>
							</ProtectedRoute>
						}
					></Route>
					<Route
						path="/saved-movies"
						element={
							<ProtectedRoute loggedIn={isLoggedIn}>
								<>
									<Header className={appClasses} loggedIn={isLoggedIn} />
									<Movies
										appClassNames={appClasses}
										isSavedMoviesPath={SavedMoviesPath}
										savedMovies={savedMovies}
										onSearchChange={handleSearch}
										onFilterChange={handleFilterCheckBox}
										isFilterChecked={isShortMoviesChecked}
										isLoading={isLoading}
										isError={isError}
										errorMessage={errorMessage}
									/>
									<Footer className={appClasses} />
								</>
							</ProtectedRoute>
						}
					></Route>

					<Route
						path="/profile"
						element={
							<ProtectedRoute loggedIn={isLoggedIn}>
								<>
									<Header className={appClasses} loggedIn={isLoggedIn} />
									<Profile
										className={appClasses}
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
							<Register onRegister={handleRegister} className={appClasses} />
						}
					></Route>

					<Route
						path="/signin"
						element={<Login onLogin={handleLogin} className={appClasses} />}
					></Route>

					<Route
						path="*"
						element={<NotFoundPage className={appClasses} />}
					></Route>
				</Routes>
			</CurrentUserContext.Provider>
		</div>
	);
}
