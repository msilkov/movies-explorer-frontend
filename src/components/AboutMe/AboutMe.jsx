import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutMe.css';
import userImage from '../../images/profile/student-img.jpeg';

export default function AboutMe({ className }) {
	return (
		<section className="about-me">
			<SectionTitle titleText={'Студент'} className={'about-me__title'} />
			<div className="about-me__content">
				<div className="about-me__content about-me__content_type_text">
					<p className="about-me__name">Михаил</p>
					<p className="about-me__desc">Веб-разработчик, 26 лет</p>
					<p className="about-me__speach">
						Добро пожаловать! Я - человек, который верит в возможность создания
						технологий, которые изменят мир. Я родился и вырос в Москве, где
						получил образование в МАИ. С 2019 года я работал в компании
						"Вертолеты России". Стремление к новым знаниям привело меня к
						поступлению в Яндекс.Практикум. Это был крутой вызов для меня, но я
						не останавливался на достигнутом и параллельно начал заниматься
						фриланс-заказами.
					</p>
					<a
						href="https://github.com/msilkov"
						className={`${className.link} about-me__link`}
					>
						Github
					</a>
				</div>
				<div className="about-me__content about-me__content_type_image">
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
