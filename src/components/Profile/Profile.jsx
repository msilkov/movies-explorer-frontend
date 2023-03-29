import React, { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Form from '../Form/Form';
import Input from '../Input/Input';
import './Profile.css';

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

	const handleFormSubmit = (event) => {
		event.preventDefault();
		console.log(userData.name, userData.email);
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
				<Form className="profile__form" onSubmit={handleFormSubmit}>
					<div className="profile__form-group">
						<label className="profile__form-label">Имя</label>
						{editMode ? (
							<Input
								className="profile__form-input"
								type="text"
								name="name"
								defaultValue={userData.name}
								autoFocus
								required
								minLength={2}
								maxLength={30}
								onChange={handleChange}
							/>
						) : (
							<span className="profile__form-span">{userData.name}</span>
						)}
					</div>
					<div className="profile__form-group">
						<label className="profile__form-label">E-mail</label>
						{editMode ? (
							<Input
								className="profile__form-input"
								type="text"
								name="email"
								defaultValue={userData.email}
								required
								onChange={handleChange}
							/>
						) : (
							<span className="profile__form-span">{userData.email}</span>
						)}
					</div>
					<div className="profile__form-group">
						{editMode ? (
							<button
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
