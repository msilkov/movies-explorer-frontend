import React from 'react';
import './NavTab.css';

export default function NavTab({ appClassNames }) {
	return (
		<nav className="navtab">
			<ul className="navtab__list">
				<li className="navtab__item">
					<button className={`${appClassNames.button} navtab__button`}>О проекте</button>
				</li>
				<li className="navtab__item">
					<button className={`${appClassNames.button} navtab__button`}>Технологии</button>
				</li>
				<li className="navtab__item">
					<button className={`${appClassNames.button} navtab__button`}>Студент</button>
				</li>
			</ul>
		</nav>
	);
}
