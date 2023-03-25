import React from 'react';
import './PortfolioLinks.css';
import { portfolioLinks } from '../../utils/constants';
import linkIcon from '../../images/icons/arrow-icon.svg';
import { Link } from 'react-router-dom';

export default function PortfolioLinks({ className }) {
	return (
		<div className="portfolio-links">
			<ul className="portfolio-links__list">
				{portfolioLinks.map((link) => (
					<li className="portfolio-links__item" key={link.id}>
						<Link
							to={link.link}
							className={`${className.link} portfolio-links__link`}
							target="_blank"
							rel="noreferrer"
						>
							{link.text}
							<img
								className="portfolio-links__icon"
								src={linkIcon}
								alt="Стрелочка"
							/>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
