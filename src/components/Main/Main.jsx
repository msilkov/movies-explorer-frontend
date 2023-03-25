import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import './Main.css';

export default function Main({ className }) {
	return (
		<main className={`${className.main} main`}>
			<Promo className={className} />
			<AboutProject />
			<Techs />
			<AboutMe className={className} />
			<Portfolio className={className} />
		</main>
	);
}
