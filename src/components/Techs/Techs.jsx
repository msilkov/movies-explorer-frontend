import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Techs.css';
import { USER_TECHNOLOGIES } from '../../utils/constants';


export default function Techs() {
	return (
		<section className="techs" id="technologies">
			<SectionTitle titleText={'Технологии'} className={'techs__title'} />
			<div className="techs__content">
				<h3 className="techs__content-title">7 технологий</h3>
				<p className="techs__desc">
					На курсе веб-разработки мы освоили технологии, которые применили в
					дипломном проекте.
				</p>
				<ul className="techs__list">
					{Object.keys(USER_TECHNOLOGIES).map((key) => (
						<li className="techs__item" key={key}>
							{USER_TECHNOLOGIES[key]}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
