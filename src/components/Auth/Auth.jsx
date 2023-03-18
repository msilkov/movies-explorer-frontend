import React from 'react';
import './Auth.css';

export default function Auth({ className }) {
  return (
    <div className="auth">
      <a href="/register" className={`${className.link} auth__link`}>
        Регистрация
      </a>
      <a href="/login" className={`${className.link} auth__link auth__link_type_button`}>
        Войти
      </a>
    </div>
  );
}
