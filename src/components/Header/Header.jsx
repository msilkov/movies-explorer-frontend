import React from 'react';

import './Header.css';
import AuthButtons from '../AuthButtons/AuthButtons';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

export default function Header({ className, loggedIn }) {
	return (
		<header className={`header ${className.header}`}>
			<Logo className={className} />
			{loggedIn ? (
				<Navigation className={className}  />
			) : (
				<AuthButtons className={className}  />
			)}
		</header>
	);
}
