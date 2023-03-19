import React from 'react';
import NavTab from '../NavTab/NavTab';
import './Promo.css';

export default function Promo({ className }) {
	return (
		<section className="promo">
			<div className="promo__container">
				<h1 className="promo__title">
					Учебный проект студента факультета Веб-разработки.
				</h1>
				<NavTab appClassNames={className} />
			</div>
		</section>
	);
}
