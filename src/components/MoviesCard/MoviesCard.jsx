import React, { useState } from 'react';
import './MoviesCard.css';

export default function MoviesCard({
	movie,
	foundMovies,
	savedMovies,
	appClassNames,
	isSavedMovieCard,
	onSave,
	onDelete,
}) {
	const isOwnSaved = savedMovies.some(
		(savedMovie) => savedMovie.movieId === movie.id
	);

	const handleMovieSaveButton = () => {
		if (isOwnSaved) {
			onDelete(
				savedMovies.filter((savedMovie) => savedMovie.movieId === movie.id)[0]
			);
		} else {
			onSave(movie);
		}
	};

	const handleMovieDeleteButton = () => {
		onDelete(movie);
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

	return (
		<article className="movie-card">
			<div className="movie-card__desc">
				<h3 className="movie-card__title">{movie.nameRU}</h3>
				<p className="movie-card__duration">{movieDuration(movie.duration)}</p>
				{isSavedMovieCard ? (
					<button
						type="button"
						onClick={handleMovieDeleteButton}
						className={`${movieDeleteButtonClassName} ${appClassNames.button}`}
					></button>
				) : (
					<button
						type="button"
						onClick={handleMovieSaveButton}
						className={`${movieSaveButtonClassName} ${appClassNames.button}`}
					></button>
				)}
			</div>
			<a
				href={movie.trailerLink}
				target="_blank"
				rel="noreferrer"
				className={`${appClassNames.link} movie-card__trailer-link`}
			>
				<div className="movie-card__thumbnail">
					{isSavedMovieCard ? (
						<img
							className="movie-card__thumbnail-img"
							src={movie.image}
							alt={`Постер фильма ${movie.nameRU}`}
						/>
					) : (
						<img
							className="movie-card__thumbnail-img"
							src={`https://api.nomoreparties.co/${movie.image.url}`}
							alt={`Постер фильма ${movie.nameRU}`}
						/>
					)}
				</div>
			</a>
		</article>
	);
}
