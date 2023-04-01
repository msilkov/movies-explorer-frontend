import React from 'react';
import './Navigation.css';
import userIcon from '../../images/icons/user-icon.svg';
import SideBar from '../SideBar/SideBar';
import { NavLink } from 'react-router-dom';
export default function Navigation({ className, onClick }) {
	
	const linkStyleActive = `${className.link} navigation__link navigation__link_state_active`;
	const linkStyle = `${className.link} navigation__link`

	return (
		<>
			<nav className="navigation">
				<ul className="navigation__list">
					<li className="navigation__item">
						<NavLink
							className={({ isActive }) => (isActive ? linkStyleActive : linkStyle)}
							to="/movies"
						>
							Фильмы
						</NavLink>
					</li>
					<li className="navigation__item">
						<NavLink
							className={({ isActive }) => (isActive ? linkStyleActive : linkStyle)}
							to="/saved-movies"
						>
							Сохранённые фильмы
						</NavLink>
					</li>
					<li className="navigation__item">
						<NavLink
							onClick={onClick}
							className={linkStyle}
							to="/profile"
						>
							<span className="navigation__link-text">Аккаунт</span>
							<img
								className="navigation__link-img"
								src={userIcon}
								alt="Иконка пользователя"
							/>
						</NavLink>
					</li>
				</ul>
			</nav>
			<SideBar className={className} />
		</>
	);
}
