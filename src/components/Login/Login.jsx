import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import './Login.css';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';

export default function Login({ className }) {
	const initialUserData = {
		name: '',
		email: '',
		password: '',
	};
	const [userData, setUserData] = useState(initialUserData);

	const error = useState(true);

	const inputClassName = `login__form-input ${
		error ? 'login__form-input_type_error' : ''
	}`;

	function handleChange(e) {
		const { name, value } = e.target;
		setUserData((oldData) => ({
			...oldData,
			[name]: value,
		}));
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<section className="login">
			<article className="login__content">
				<Logo className={className} />
				<h2 className="login__title">Рады видеть!</h2>
				<form className="login__form" onSubmit={handleSubmit}>
					<label className="login__form-label">E-mail</label>
					<Input
						type="email"
						name="email"
						value={userData.email}
						onChange={handleChange}
						className="login__form-input"
						placeholder="E-mail"
						minLength={2}
						maxLength={30}
						required=""
					/>
					<label className="login__form-label">Пароль</label>
					<Input
						type="password"
						name="password"
						value={userData.password}
						onChange={handleChange}
						className={inputClassName}
						placeholder="Пароль"
						minLength={2}
						maxLength={30}
						required=""
					/>
					{error && (
						<span className="login__error">Что-то пошло не так...</span>
					)}
					<button
						type="submit"
						className={`${className.link} login__form-submit-btn`}
					>
						Войти
					</button>
				</form>
				<div className="login__redirect">
					<p className="login__redirect-text">Ещё не зарегистрированы?&nbsp;</p>
					<Link
						to="/signup"
						className={`${className.link} login__redirect-link`}
					>
						Регистрация
					</Link>
				</div>
			</article>
		</section>
	);
}
