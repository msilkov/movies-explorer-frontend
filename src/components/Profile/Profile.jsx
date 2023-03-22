import React, { useState } from 'react';
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
				<form className="profile__form" onSubmit={handleSave}>
					<div className="profile__form-group">
						<label className="profile__form-label">Имя</label>
						{editMode ? (
							<input
								className="profile__form-input"
								type="text"
								name="name"
								defaultValue={userName}
								autoFocus
							/>
						) : (
							<span className="profile__form-span">{userName}</span>
						)}
					</div>
					<div className="profile__form-group">
						<label className="profile__form-label">E-mail</label>
						{editMode ? (
							<input
								className="profile__form-input"
								type="text"
								name="email"
								defaultValue={userEmail}
							/>
						) : (
							<span className="profile__form-span">{userEmail}</span>
						)}
					</div>
					<div className="profile__form-group">
						{editMode ? (
							<button
								className="profile__form-btn profile__form-btn_type_save"
								type="submit"
							>
								Сохранить
							</button>
						) : (
							<>
								<button className="profile__form-btn" onClick={handleEdit}>
									Редактировать
								</button>
								<button className="profile__form-btn profile__form-btn_type_logout">
									Выйти из аккаунта
								</button>
							</>
						)}
					</div>
				</form>
			</section>
		</main>
	);
}
