import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';
import userIcon from '../../images/icons/user-icon.svg';

export default function SideBar({ className }) {
	const [isActive, setIsActive] = useState(false);
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const handleClick = () => {
		setIsActive(!isActive);
		setSidebarOpen(!sidebarOpen);
	};

	return (
		<div className="sidebar">
			<button
				type="button"
				className={`sidebar__button ${
					isActive ? 'sidebar__button_state_active' : ''
				} ${className.button}`}
				onClick={handleClick}
			>
				<span
					className={`sidebar__button-line ${
						isActive ? 'sidebar__button-line_state_active' : ''
					}`}
				/>
				<span
					className={`sidebar__button-line ${
						isActive ? 'sidebar__button-line_state_active' : ''
					}`}
				/>
				<span
					className={`sidebar__button-line ${
						isActive ? 'sidebar__button-line_state_active' : ''
					}`}
				/>
				<span
					className={`sidebar__button-line ${
						isActive ? 'sidebar__button-line_state_active' : ''
					}`}
				/>
			</button>

			<div
				className={`sidebar__content ${
					sidebarOpen ? 'sidebar__content_state_open' : ''
				}`}
			>
				<nav className="sidebar__nav">
					<ul className="sidebar__list">
						<li className="sidebar__item">
							<NavLink className={`${className.link} sidebar__link `} to="/">
								Главная
							</NavLink>
						</li>
						<li className="sidebar__item">
							<NavLink
								className={`${className.link} sidebar__link sidebar__link_state_active`}
								to="/movies"
							>
								Фильмы
							</NavLink>
						</li>
						<li className="sidebar__item">
							<NavLink
								className={`${className.link} sidebar__link `}
								to="/saved-movies"
							>
								Сохранённые фильмы
							</NavLink>
						</li>
						<li className="sidebar__item">
							<NavLink className={`${className.link} sidebar__link `} to="/profile">
								<span className="sidebar__link-text">Аккаунт</span>
								<img
									className="sidebar__link-img"
									src={userIcon}
									alt="Иконка пользователя"
								/>
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}
