import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

export default function NotFoundPage({ className }) {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};
	return (
		<section className="not-found not-found_position_center">
			<h1 className="not-found__title">404</h1>
			<p className="not-found__text">Страница не найдена</p>
			<button
				className={`${className.button} not-found__btn`}
				onClick={handleGoBack}
			>
				Назад
			</button>
		</section>
	);
}
