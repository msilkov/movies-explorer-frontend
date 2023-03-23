import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

export default function Auth({ className, onClick }) {
  return (
    <div className="auth">
      <Link to="/signup" className={`${className.link} auth__link`}>
        Регистрация
      </Link>
      <Link  onClick={onClick} to="/signin" className={`${className.link} auth__link auth__link_type_button`}>
        Войти
      </Link>
    </div>
  );
}
