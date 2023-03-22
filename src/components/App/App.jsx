import React, { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';
import { appClasses } from '../../utils/constants';
import Movies from '../Movies/Movies';
import { Routes, Route, useLocation } from 'react-router-dom';

export default function App() {
	const [isLoggedIn, setLoggedIn] = useState(false);

	function handleLogin() {
		setLoggedIn(!isLoggedIn);
	}

	const location = useLocation();
	const isSavedMovies = location.pathname === '/saved-movies';

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
			</Routes>
		</div>
	);
}
