import React from 'react';
import AboutProject from '../AboutProject/AboutProject';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import './Main.css';

export default function Main({ className, userTechnologies }) {
	return (
		<main className={`${className.main} main`}>
			<Promo className={className} />
			<AboutProject />
			<Techs userTechnologies={userTechnologies} />
		</main>
	);
}
