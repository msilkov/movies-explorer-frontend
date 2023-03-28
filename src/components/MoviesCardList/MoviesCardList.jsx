import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList({
	movies,
	appClassNames,
	deviceWidth,
	isSavedMoviesPath,
}) {
	const { TABLET, LAPTOP } = deviceWidth;
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [displayCount, setDisplayCount] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			setTimeout(() => {
				setWindowWidth(window.innerWidth);
			}, 100);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		if (windowWidth >= LAPTOP) {
			setDisplayCount(12);
		} else if (windowWidth >= TABLET) {
			setDisplayCount(8);
		} else {
			setDisplayCount(5);
		}
	}, [windowWidth, TABLET, LAPTOP]);

	const displayedMovies = movies.slice(0, displayCount);

	const handleShowMore = () => {
		let INITIAL_MOVIE_COUNT;
		if (windowWidth >= LAPTOP) {
			INITIAL_MOVIE_COUNT = 12;
		} else if (windowWidth >= TABLET) {
			INITIAL_MOVIE_COUNT = 8;
		} else {
			INITIAL_MOVIE_COUNT = 5;
		}
		setDisplayCount(displayCount + INITIAL_MOVIE_COUNT);
	};

	return (
		<section className="movies-layout">
			<ul className="movies-layout__list">
				{displayedMovies.map((movie) => (
					<li key={movie.id} className="movies-layout__item">
						<MoviesCard
							movie={movie}
							appClassNames={appClassNames}
							isSavedMovieCard={isSavedMoviesPath}
						/>
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
