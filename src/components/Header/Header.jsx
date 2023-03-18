import React from 'react';
import './Header.css';
import Auth from '../Auth/Auth';
import Logo from '../Logo/Logo';
import BurgerMenuButton from '../BurgerMenuButton/BurgerMenuButton';
import Navigation from '../Navigation/Navigation';

export default function Header({ className }) {
  return (
    <header className={`header ${className.header}`}>
      <Logo className={className} />
      <Auth className={className} />
      {/* When signIn True display NavBar */}
      <Navigation className={className} />
      <BurgerMenuButton className={className} />

    </header>
  );
}
