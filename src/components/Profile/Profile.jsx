import React, { useState } from 'react';
import Form from '../Form/Form';
import Input from '../Input/Input';
import './Profile.css';

export default function Profile({ className }) {
	const [userName, setUserName] = useState('Виталий');
	const [userEmail, setUserEmail] = useState('pochta@yandex.ru');
	const [editMode, setEditMode] = useState(false);

	const handleEdit = (event) => {
		event.preventDefault();
		setEditMode(true);
	};

	const handleSave = (event) => {
		event.preventDefault();
		setUserName(event.target.name.value);
		setUserEmail(event.target.email.value);
		setEditMode(false);
	};

	return (
		<main className={`${className.main}`}>
			<section className="profile">
				<h1 className="profile__title">{`Привет, ${userName}!`}</h1>
				<Form className="profile__form" onSubmit={handleSave}>
					<div className="profile__form-group">
						<label className="profile__form-label">Имя</label>
						{editMode ? (
							<Input
								className="profile__form-input"
								type="text"
								name="name"
								defaultValue={userName}
								autoFocus
								required
								minLength={2}
								maxLength={30}
							/>
						) : (
							<span className="profile__form-span">{userName}</span>
						)}
					</div>
					<div className="profile__form-group">
						<label className="profile__form-label">E-mail</label>
						{editMode ? (
							<Input
								className="profile__form-input"
								type="text"
								name="email"
								defaultValue={userEmail}
								required
							/>
						) : (
							<span className="profile__form-span">{userEmail}</span>
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
