import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/icons/logo.svg';
import './Logo.css';

export default function Logo({ className ,onClick }) {
  return (
    <Link to="/" className={`logo ${className.link}`} onClick={onClick}>
      <img src={logo} alt="Логотип страницы" className="logo__icon" />
    </Link>
  );
}
