import React, { useState } from 'react';
import './MoviesCard.css';

export default function MoviesCard({ movie, appClassNames }) {
	const [isOwnSaved, setOwnSaved] = useState(false);

	const handleMovieSaveButton = () => {
		setOwnSaved(!isOwnSaved);
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

	return (
		<article className="movie-card">
			<div className="movie-card__desc">
				<h3 className="movie-card__title">{movie.nameRU}</h3>
				<p className="movie-card__duration">{movieDuration(movie.duration)}</p>
				<button
					onClick={handleMovieSaveButton}
					className={`${movieSaveButtonClassName} ${appClassNames.button}`}
				></button>
			</div>
			<div className="movie-card__thumbnail">
				<img className="movie-card__thumbnail-img" src={movie.thumbnail} alt={`Постер фильма ${movie.nameRU}`} />
			</div>
		</article>
	);
}
