import React, { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';
import { appClasses } from '../../utils/constants';
import Movies from '../Movies/Movies';

export default function App() {
	const [isLoggedIn, setLoggedIn] = useState(false);

	function handleLogin() {
		setLoggedIn(!isLoggedIn);
	}

	return (
		<div className="app__content">
			<Header
				className={appClasses}
				loggedIn={isLoggedIn}
				onLogin={handleLogin}
			/>
			{!isLoggedIn && <Main className={appClasses} />}

      <Movies appClassNames={appClasses} />

			<Footer className={appClasses} />
		</div>
	);
}
