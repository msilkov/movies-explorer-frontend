import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';
import { appClasses } from '../../utils/constants';
import Movies from '../Movies/Movies';
import { Routes, Route, useLocation } from 'react-router-dom';
import Profile from '../Profile/Profile';

export default function App() {
	const [isLoggedIn, setLoggedIn] = useState(false);

	const location = useLocation();
	const isSavedMovies = location.pathname === '/saved-movies';
	const isAuth =
		location.pathname === '/register' || location.pathname === '/login';

	const handleLogin = () => {
		console.log(location.pathname);
	};

	useEffect(() => {
		if (location.pathname === '/') {
			setLoggedIn(false);
		} else {
			setLoggedIn(true);
		}
	}, [location.pathname]);

	return (
		<div className="app__content">
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Header
								className={appClasses}
								loggedIn={isLoggedIn}
								onLogin={handleLogin}
							/>
							<Main className={appClasses} />
							<Footer className={appClasses} />
						</>
					}
				></Route>

				<Route
					path="/movies"
					element={
						<>
							<Header
								className={appClasses}
								loggedIn={isLoggedIn}
								onLogin={handleLogin}
							/>
							<Movies
								appClassNames={appClasses}
								isSavedMovies={isSavedMovies}
							/>
							<Footer className={appClasses} />
						</>
					}
				></Route>
				<Route
					path="/saved-movies"
					element={
						<>
							<Header
								className={appClasses}
								loggedIn={isLoggedIn}
								onLogin={handleLogin}
							/>
							<Movies
								appClassNames={appClasses}
								isSavedMovies={isSavedMovies}
							/>
							<Footer className={appClasses} />
						</>
					}
				></Route>
				<Route
					path="/profile"
					element={
						<>
							<Header
								className={appClasses}
								loggedIn={isLoggedIn}
								onLogin={handleLogin}
							/>
							<Profile className={appClasses} />
						</>
					}
				></Route>
			</Routes>
		</div>
	);
}
