import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import './Login.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Form from '../Form/Form';

export default function Login({ onLogin, className }) {
	const initialUserData = {
		email: '',
		password: '',
	};
	const [userData, setUserData] = useState(initialUserData);
	
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		setValue,
	} = useForm({
		mode: 'onChange',
	});
	
	function handleFormSubmit() {
		const { email, password } = userData;
		if (!email || !password) return;
		onLogin(email, password);
	}
	
	function handleChange(e) {
		const { name, value } = e.target;
		setValue(name, value, { shouldValidate: true });
		
		setUserData((oldData) => ({
			...oldData,
			[name]: value,
		}));
	}

	return (
		<section className="login">
			<article className="login__content">
				<Logo className={className} />
				<h2 className="login__title">Рады видеть!</h2>
				<Form className="login__form" onSubmit={handleSubmit(handleFormSubmit)}>
					<label className="login__form-label">E-mail</label>
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
						className="login__form-input"
						placeholder="E-mail"
					/>
					{errors?.email && (
						<span className="login__error">{errors.email.message}</span>
					)}
					<label className="login__form-label">Пароль</label>
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
						className="login__form-input"
						placeholder="Пароль"
					/>
					{errors?.password && (
						<span className="login__error">{errors.password.message}</span>
					)}
					<button
						disabled={!isValid}
						type="submit"
						className={`${className.button} login__form-submit-btn`}
					>
						Войти
					</button>
				</Form>

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
