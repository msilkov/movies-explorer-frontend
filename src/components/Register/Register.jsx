import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import './Register.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Form from '../Form/Form';

export default function Register({ className, onRegister }) {
	const initialUserData = {
		name: '',
		email: '',
		password: '',
	};
	const [userData, setUserData] = useState(initialUserData);

	function handleChange(e) {
		const { name, value } = e.target;
		setUserData((oldData) => ({
			...oldData,
			[name]: value,
		}));
	}

	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
	} = useForm({
		mode: 'onBlur',
	});

	function handleFormSubmit() {
		const { name, email, password } = userData;
		if (!name || !email || !password) return;
		onRegister(name, email, password);
	}

	return (
		<section className="register">
			<article className="register__content">
				<Logo className={className} />
				<h2 className="register__title">Добро пожаловать!</h2>
				<Form
					className="register__form"
					onSubmit={handleSubmit(handleFormSubmit)}
				>
					<label className="register__form-label">Имя</label>
					<input
						{...register('name', {
							required: 'Поле обязательно к заполнению',
							minLength: {
								value: 2,
								message: 'Минимальное количество символов 2',
							},
							maxLength: {
								value: 30,
								message: 'Максимальное количество символов 30',
							},
						})}
						type="text"
						name="name"
						value={userData.name}
						onChange={handleChange}
						className="register__form-input"
						placeholder="Ваше Имя"
					/>
					{errors?.name && (
						<span className="register__error">{errors.name.message}</span>
					)}
					<label className="register__form-label">E-mail</label>
					<input
						{...register('email', {
							required: 'Поле обязательно к заполнению',
							pattern: {
								value:
									/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
								message: 'Некорректный email',
							},
						})}
						type="email"
						name="email"
						value={userData.email}
						onChange={handleChange}
						className="register__form-input"
						placeholder="E-mail"
					/>
					{errors?.email && (
						<span className="register__error">{errors.email.message}</span>
					)}
					<label className="register__form-label">Пароль</label>
					<input
						{...register('password', {
							required: 'Поле обязательно к заполнению',
							minLength: {
								value: 8,
								message: 'Минимальное количество символов 8',
							},
							maxLength: {
								value: 30,
								message: 'Максимальное количество символов 30',
							},
						})}
						type="password"
						name="password"
						value={userData.password}
						onChange={handleChange}
						className="register__form-input"
						placeholder="Пароль"
					/>
					{errors?.password && (
						<span className="register__error">{errors.password.message}</span>
					)}
					<button
						disabled={!isValid}
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
