import React from 'react';
import './NavTab.css';
import {Link} from 'react-scroll';

export default function NavTab({ appClassNames }) {
	return (
		<nav className="navtab">
			<ul className="navtab__list">
				<li className="navtab__item">
					<Link to="about" spy={true} smooth={true} offset={0} duration={500} className={`${appClassNames.link} navtab__link`}>О проекте</Link>
				</li>
				<li className="navtab__item">
					<Link to="technologies" spy={true} smooth={true} offset={0} duration={500}  className={`${appClassNames.link} navtab__link`}>
						Технологии
					</Link>
				</li>
				<li className="navtab__item">
					<Link to="student" spy={true} smooth={true} offset={0} duration={500} className={`${appClassNames.link} navtab__link`}>
						Студент
					</Link>
				</li>
			</ul>
		</nav>
	);
}
