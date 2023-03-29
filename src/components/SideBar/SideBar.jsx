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
	const linkStyleActive = `${className.link} sidebar__link sidebar__link_state_active`;
	const linkStyle = `${className.link} sidebar__link`;

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
				<nav className="sidebar__nav" onClick={handleClick}>
					<ul className="sidebar__list">
						<li className="sidebar__item">
							<NavLink
								className={({ isActive }) =>
									isActive ? linkStyleActive : linkStyle
								} 
								to="/"
							>
								Главная
							</NavLink>
						</li>
						<li className="sidebar__item">
							<NavLink
								className={({ isActive }) =>
									isActive ? linkStyleActive : linkStyle
								}
								to="/movies"
							>
								Фильмы
							</NavLink>
						</li>
						<li className="sidebar__item">
							<NavLink
								className={({ isActive }) =>
									isActive ? linkStyleActive : linkStyle
								}
								to="/saved-movies"
							>
								Сохранённые фильмы
							</NavLink>
						</li>
						<li className="sidebar__item">
							<NavLink
								className={({ isActive }) =>
									isActive ? linkStyleActive : linkStyle
								}
								to="/profile"
							>
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
