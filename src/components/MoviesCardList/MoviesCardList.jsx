import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList({ movies, appClassNames, deviceWidth, isSavedMovies }) {
	const [displayedMovies, setDisplayedMovies] = useState([]);

	const { TABLET, LAPTOP } = deviceWidth;

	let INITIAL_MOVIE_COUNT;

	if (window.innerWidth >= LAPTOP) {
		INITIAL_MOVIE_COUNT = 12;
	} else if (window.innerWidth >= TABLET) {
		INITIAL_MOVIE_COUNT = 8;
	} else {
		INITIAL_MOVIE_COUNT = 5;
	}

	const [displayCount, setDisplayCount] = useState(INITIAL_MOVIE_COUNT);

	const handleShowMore = () => {
		setDisplayCount(displayCount + INITIAL_MOVIE_COUNT);
	};

	useEffect(() => {
		setDisplayedMovies(movies.slice(0, displayCount));
	}, [movies, displayCount]);

	return (
		<section className="movies-layout">
      
			<ul className="movies-layout__list">
				{displayedMovies.map((movie) => (
					<li key={movie.movieId} className="movies-layout__item">
						<MoviesCard movie={movie} appClassNames={appClassNames} isSavedMovies={isSavedMovies} />
					</li>
				))}
			</ul>
			{displayCount < movies.length && (
				<div className="movies-layout__show-more">
					<button
						className={`movies-layout__show-more-btn ${appClassNames.button}`}
						onClick={handleShowMore}
					>
						Ещё
					</button>
				</div>
			)}
		</section>
	);
}
