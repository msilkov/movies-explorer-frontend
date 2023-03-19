import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Techs.css';

export default function Techs({ userTechnologies }) {
	return (
		<section className="techs">
			<SectionTitle titleText={'Технологии'} className={'techs__title'} />
			<div className="techs__content">
				<h3 className="techs__content-title">7 технологий</h3>
				<p className="techs__desc">
					На курсе веб-разработки мы освоили технологии, которые применили в
					дипломном проекте.
				</p>
				<ul className="techs__list">
					{Object.keys(userTechnologies).map((key) => (
						<li className="techs__item" key={key}>
							{userTechnologies[key]}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
