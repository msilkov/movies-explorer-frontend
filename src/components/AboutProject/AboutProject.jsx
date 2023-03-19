import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutProject.css';

export default function AboutProject() {
	return (
		<section className="about-project">
			<SectionTitle
				className={'about-project__title'}
				titleText={'О проекте'}
			/>
			<div className="about-project__content">
				<div className="about-project__content-item">
					<h3 className="about-project__content-title">
						Дипломный проект включал 5 этапов
					</h3>
					<p className="about-project__content-desc">
						Составление плана, работу над бэкендом, вёрстку, добавление
						функциональности и финальные доработки.
					</p>
				</div>
				<div className="about-project__content-item">
					<h3 className="about-project__content-title">
						На выполнение диплома ушло 5 недель
					</h3>
					<p className="about-project__content-desc">
						У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
						соблюдать, чтобы успешно защититься.
					</p>
				</div>
			</div>
			<div className="about-project__progress-bar">
				<p className="about-project__progress-bar__item about-project__progress-bar__item_type_highlight">1 неделя</p>
				<p className="about-project__progress-bar__item about-project__progress-bar__item_type_main">4 недели</p>
				<p className="about-project__progress-bar__item about-project__progress-bar__item_type_label">Back-end</p>
				<p className="about-project__progress-bar__item about-project__progress-bar__item_type_label">Front-end</p>
			</div>
		</section>
	);
}
