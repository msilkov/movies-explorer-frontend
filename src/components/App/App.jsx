import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.css';

const classes = {
	content: 'app__content',
	header: 'app__header',
  footer:'app__footer',
	link: 'app__link',
	button: 'app__button',
};

export default function App() {
	const [isLoggedIn, setLoggedIn] = useState(false);

	function handleLogin() {
		setLoggedIn(!isLoggedIn);
		console.log('run');
	}

	return (
		<div className="app__content">
			<Header className={classes} loggedIn={isLoggedIn} onLogin={handleLogin} />
      <Footer className={classes} />
		</div>
	);
}
