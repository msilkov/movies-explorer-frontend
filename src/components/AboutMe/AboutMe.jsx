import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutMe.css';
import userImage from '../../images/profile/student-img.jpeg';
import { Link } from 'react-router-dom';

export default function AboutMe({ className }) {
	return (
		<section className="about-me" id="student">
			<SectionTitle titleText={'Студент'} className={'about-me__title'} />
			<div className="about-me__content">
				<div className="about-me__content-text">
					<h3 className="about-me__name">Михаил</h3>
					<p className="about-me__desc">Веб-разработчик, 26 лет</p>
					<p className="about-me__speach">
						Я родился и живу в Саратове, закончил факультет экономики СГУ. У
						меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
						бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
						Контур». После того, как прошёл курс по веб-разработке, начал
						заниматься фриланс-заказами и ушёл с постоянной работы.
					</p>
					<Link
						to="https://github.com/msilkov"
						target="_blank"
						rel="noreferrer"
						className={`${className.link} about-me__link`}
					>
						Github
					</Link>
				</div>
				<div className="about-me__content-image">
					<img
						className="about-me__image"
						src={userImage}
						alt="Фотография профессионального разработчика"
					/>
				</div>
			</div>
		</section>
	);
}
