import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import './Register.css';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import Form from '../Form/Form';

export default function Register({ className, onRegister }) {
	const initialUserData = {
		name: '',
		email: '',
		password: '',
	};
	const [userData, setUserData] = useState(initialUserData);

	const error = useState(true);

	const inputClassName = `register__form-input ${
		error ? 'register__form-input_type_error' : ''
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
		const { name, email, password } = userData;
		if (!name || !email || !password) return;
		onRegister(name, email, password);
	}

	return (
		<section className="register">
			<article className="register__content">
				<Logo className={className} />
				<h2 className="register__title">Добро пожаловать!</h2>
				<Form className="register__form" onSubmit={handleSubmit}>
					<label className="register__form-label">Имя</label>
					<Input
						type="text"
						name="name"
						value={userData.name}
						onChange={handleChange}
						className="register__form-input"
						placeholder="Ваше Имя"
						minLength={2}
						maxLength={30}
						required
					/>
					<label className="register__form-label">E-mail</label>
					<Input
						type="email"
						name="email"
						value={userData.email}
						onChange={handleChange}
						className="register__form-input"
						placeholder="E-mail"
						minLength={2}
						maxLength={30}
						required
					/>
					<label className="register__form-label">Пароль</label>
					<Input
						type="password"
						name="password"
						value={userData.password}
						onChange={handleChange}
						className={inputClassName}
						placeholder="Пароль"
						minLength={2}
						maxLength={30}
						required
					/>
					{error && (
						<span className="register__error">Что-то пошло не так...</span>
					)}
					<button
						type="submit"
						className={`${className.button} register__form-submit-btn`}
					>
						Зарегистрироваться
					</button>
				</Form>
				<div className="register__redirect">
					<p className="register__redirect-text">Уже зарегистрированы?&nbsp;</p>
					<Link
						to="/signin"
						className={`${className.link} register__redirect-link`}
					>
						Войти
					</Link>
				</div>
			</article>
		</section>
	);
}
