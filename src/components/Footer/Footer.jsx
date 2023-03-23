import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer({ className }) {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={`${className.footer} footer`}>
			<div className="footer__top">
				<h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
			</div>
			<div className="footer__bottom">
				<p className="footer__copyright">&copy; {currentYear}</p>
				<nav className="footer__nav">
					<ul className="footer__list">
						<li className="footer__list-item">
							<Link
								to="https://practicum.yandex.ru/"
								target="_blank"
								rel="noreferrer"
                className={`${className.link} footer__link`}
							>
								Яндекс.Практикум
							</Link>
						</li>
						<li className="footer__list-item">
							<Link
								to="https://github.com/msilkov"
								target="_blank"
								rel="noreferrer"
                className={`${className.link} footer__link`}
							>
								Github
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	);
}
