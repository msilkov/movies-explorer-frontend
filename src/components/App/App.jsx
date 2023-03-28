import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';
import { appClasses } from '../../utils/constants';
import Movies from '../Movies/Movies';
import {
	Routes,
	Route,
	useLocation,
	useNavigate,
	Navigate,
} from 'react-router-dom';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as moviesApi from '../../utils/MoviesApi';
import * as mainApi from '../../utils/MainApi';

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

	useEffect(() => {
		mainApi
			.getUserInfo()
			.then((user) => {
				if (user) {
					setLoggedIn(true);
					navigate('/movies');
				}
			})
			.catch((err) => {
				console.log(`Что-то пошло не так: ${err}`);
			});
	}, []);

	useEffect(() => {
		moviesApi
			.getMovies()
			.then((movies) => {
				setInitialMovies(movies);
			})
			.catch((err) => {
				console.log(`Ошибка при загрузке данных с сервера: ${err}`);
			});
	}, []);

	useEffect(() => {
		setIsError(false);
		setErrorMessage('');
	}, [location.pathname]);

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
					
							<ProtectedRoute loggedIn={isLoggedIn}><>
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
								<Footer className={appClasses} /></>
							</ProtectedRoute>
					
					}
				></Route>
				<Route
					path="/saved-movies"
					element={
						<ProtectedRoute loggedIn={isLoggedIn}><>
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
							<Footer className={appClasses} /></>
						</ProtectedRoute>
					}
				></Route>

				<Route
					path="/profile"
					element={
						<ProtectedRoute loggedIn={isLoggedIn}><>
							<Header className={appClasses} loggedIn={isLoggedIn} />
							<Profile className={appClasses} /></>
						</ProtectedRoute>
					}
				></Route>

				<Route
					path="/signup"
					element={<Register className={appClasses} />}
				></Route>

				<Route
					path="/signin"
					element={<Login className={appClasses} />}
				></Route>

				<Route
					path="*"
					element={<NotFoundPage className={appClasses} />}
				></Route>
			</Routes>
		</div>
	);
}
