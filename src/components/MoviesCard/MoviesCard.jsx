import React, { useState } from 'react';
import './MoviesCard.css';

export default function MoviesCard({ movie, appClassNames, isSavedMovies }) {
	const [isOwnSaved, setOwnSaved] = useState(false);

	const handleMovieSaveButton = () => {
		setOwnSaved(!isOwnSaved);
	};

	const handleMovieDeleteButton = (event) => {
		console.log(`Movie ${movie.nameRU} has been deleted`);

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

	const saveOrDeleteButtonClassName = isSavedMovies
		? movieDeleteButtonClassName
		: movieSaveButtonClassName;

	return (
		<article className="movie-card">
			<div className="movie-card__desc">
				<h3 className="movie-card__title">{movie.nameRU}</h3>
				<p className="movie-card__duration">{movieDuration(movie.duration)}</p>
				<button
					onClick={
						isSavedMovies ? handleMovieDeleteButton : handleMovieSaveButton
					}
					className={`${saveOrDeleteButtonClassName} ${appClassNames.button}`}
				></button>
			</div>
			<div className="movie-card__thumbnail">
				<img
					className="movie-card__thumbnail-img"
					src={movie.thumbnail}
					alt={`Постер фильма ${movie.nameRU}`}
				/>
			</div>
		</article>
	);
}
