import React, { useState } from 'react';
import './MoviesCard.css';

export default function MoviesCard({ movie, appClassNames, isSavedMovieCard }) {
	const [isOwnSaved, setOwnSaved] = useState(false);

	const handleMovieSaveButton = () => {
		setOwnSaved(!isOwnSaved);
	};

	const handleMovieDeleteButton = (event) => {
		const cardElement = event.target.closest('.movie-card');
		if (cardElement) {
			cardElement.remove();
		}
	};

	const movieDuration = (durationNumber) => {
		const [hours, minutes] = [
			Math.floor(durationNumber / 60),
			durationNumber % 60,
		];
		return `${hours}ч ${minutes}м`;
	};

	const movieSaveButtonClassName = `movie-card__save-btn${
		isOwnSaved ? ' movie-card__save-btn_type_saved' : ''
	}`;

	const movieDeleteButtonClassName = 'movie-card__delete-btn';

	const saveOrDeleteButtonClassName = isSavedMovieCard
		? movieDeleteButtonClassName
		: movieSaveButtonClassName;

	return (
		<article className="movie-card">
			<div className="movie-card__desc">
				<h3 className="movie-card__title">{movie.nameRU}</h3>
				<p className="movie-card__duration">{movieDuration(movie.duration)}</p>
				<button
					onClick={
						isSavedMovieCard ? handleMovieDeleteButton : handleMovieSaveButton
					}
					className={`${saveOrDeleteButtonClassName} ${appClassNames.button}`}
				></button>
			</div>
			<div className="movie-card__thumbnail">
				<img
					className="movie-card__thumbnail-img"
					src={`https://api.nomoreparties.co/${movie.image.url}`}
					alt={`Постер фильма ${movie.nameRU}`}
				/>
			</div>
		</article>
	);
}
