import React from 'react';
import PortfolioLinks from '../PortfolioLinks/PortfolioLinks';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Portfolio.css';

export default function Portfolio({ className }) {
	return (
		<section className="portfolio">
			<SectionTitle titleText="Портфолио" className="portfolio__title" />
			<PortfolioLinks className={className} />
		</section>
	);
}
