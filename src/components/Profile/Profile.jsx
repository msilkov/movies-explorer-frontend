import React, { useState, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Form from '../Form/Form';
import './Profile.css';
import { useForm } from 'react-hook-form';

export default function Profile({ className, onLogout, onDataSave }) {
	const currentUser = useContext(CurrentUserContext);

	const initialUserData = {
		name: currentUser.name || '',
		email: currentUser.email || '',
	};
	const [userData, setUserData] = useState(initialUserData);

	const [editMode, setEditMode] = useState(false);

	const handleEdit = (event) => {
		event.preventDefault();
		setEditMode(true);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setUserData((oldData) => ({
			...oldData,
			[name]: value,
		}));
	};
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
	} = useForm({
		mode:'onBlur' 
	});

	const handleFormSubmit = () => {
		const { name, email } = userData;
		if (!name || !email) return;
		onDataSave(name, email);
		setEditMode(false);
	};

	const handleLogout = (event) => {
		event.preventDefault();
		onLogout();
	};

	return (
		<main className={`${className.main}`}>
			<section className="profile">
				<h1 className="profile__title">{`Привет, ${userData.name}!`}</h1>
				<Form
					className="profile__form"
					onSubmit={handleSubmit(handleFormSubmit)}
				>
					<div className="profile__form-group">
						<label className="profile__form-label">Имя</label>
						{editMode ? (
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
								className="profile__form-input"
								type="text"
								name="name"
								defaultValue={userData.name}
								onChange={handleChange}
							/>
						) : (
							<span className="profile__form-span">{userData.name}</span>
						)}
					</div>
					<span className="profile__form-span">
						{errors?.name && (
							<p className="profile__form-error">{errors.name.message}</p>
						)}
					</span>
					<div className="profile__form-group">
						<label className="profile__form-label">E-mail</label>
						{editMode ? (
							<input
								{...register('email', {
									required: 'Поле обязательно к заполнению',
									pattern: {
										value:
											/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
										message: 'Некорректный email',
									},
								})}
								className="profile__form-input"
								type="text"
								name="email"
								defaultValue={userData.email}
								onChange={handleChange}
							/>
						) : (
							<span className="profile__form-span">{userData.email}</span>
						)}
					</div>
					<span className="profile__form-span">
						{errors?.email && (
							<p className="profile__form-error">{errors.email.message}</p>
						)}
					</span>
					<div className="profile__form-group">
						{editMode ? (
							<button disabled={!isValid}
								className={`profile__form-btn profile__form-btn_type_save ${className.button}`}
								type="submit"
							>
								Сохранить
							</button>
						) : (
							<>
								<button
									className={`profile__form-btn ${className.button}`}
									onClick={handleEdit}
								>
									Редактировать
								</button>
								<button
									className={`profile__form-btn profile__form-btn_type_logout ${className.button}`}
									onClick={handleLogout}
								>
									Выйти из аккаунта
								</button>
							</>
						)}
					</div>
				</Form>
			</section>
		</main>
	);
}
