import React from 'react';
import logo from '../../images/icons/logo.svg';
import './Logo.css';

export default function Logo({ className }) {
  return (
    <a href="/" className={`logo ${className.link}`}>
      <img src={logo} alt="page-logo" className="logo__icon" />
    </a>
  );
}
