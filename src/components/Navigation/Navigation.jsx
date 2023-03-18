import React from 'react';
import './Navigation.css';
import userIcon from '../../images/icons/user-icon.svg';

export default function Navigation({ className }) {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a
            className={`${className.link} navigation__link navigation__link_state_active`}
            href="/"
          >
            Фильмы
          </a>
        </li>
        <li className="navigation__item">
          <a className={`${className.link} navigation__link`} href="/about">
            Сохранённые фильмы
          </a>
        </li>
        <li className="navigation__item">
          <a className={`${className.link} navigation__link`} href="/contact">
            <span className="navigation__link-text">Аккаунт</span>
            <img
              className="navigation__link-img"
              src={userIcon}
              alt="Иконка пользователя"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}
