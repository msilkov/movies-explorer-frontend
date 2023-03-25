import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

export default function NotFoundPage({ className }) {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};
	return (
		<section className="not-found">
			<div className="not-found__content">
				<div className="not-found__text">
					<h1 className="not-found__title">404</h1>
					<p className="not-found__desc">Страница не найдена</p>
				</div>
				<button
					className={`${className.button} not-found__btn`}
					onClick={handleGoBack}
				>
					Назад
				</button>
			</div>
		</section>
	);
}
