import React from 'react';

import './Header.css';
import Auth from '../Auth/Auth';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

export default function Header({ className, loggedIn, onLogin }) {
	return (
		<header className={`header ${className.header}`}>
			<Logo className={className} />
			{loggedIn ? (
				<Navigation className={className} onClick={onLogin} />
			) : (
				<Auth className={className} onClick={onLogin} />
			)}
		</header>
	);
}
