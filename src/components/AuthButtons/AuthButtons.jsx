import React from 'react';
import { Link } from 'react-router-dom';
import './AuthButtons.css';

export default function AuthButtons({ className }) {
	return (
		<div className="auth-buttons">
			<button
				type="button"
				className={`${className.button} auth-buttons__button`}
			>
				<Link to="/signup" className={`${className.link} auth-buttons__link`}>
					Регистрация
				</Link>
			</button>
			<button
				type="button"
				className={`${className.button} auth-buttons__button auth-buttons__button_type_login`}
			>
				<Link to="/signin" className={`${className.link} auth-buttons__link auth-buttons__link_type_login`}>
					Войти
				</Link>
			</button>
		</div>
	);
}
