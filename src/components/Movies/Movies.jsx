import React from 'react';
import SearchSection from '../SearchSection/SearchSection';
import './Movies.css';
import { DEVICE_WIDTH } from '../../utils/constants';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function Movies({
	appClassNames,
	isSavedMoviesPath,
	foundMovies,
	savedMovies,
	savedMoviesSubset,
	onMoviesSearchSubmit,
	onSavedMoviesSearchSubmit,
	onMoviesFilterChange,
	onSavedMoviesFilterChange,
	isLoading,
	isError,
	errorMessage,
	successMessage,
	isSuccess,
	onSave,
	onDelete,
	isShortSavedMoviesChecked,
	initialSavedMovies,
}) {
	return (
		<main className={`${appClassNames.main} movies`}>
			<SearchSection
				appClassNames={appClassNames}
				onMoviesSearchSubmit={onMoviesSearchSubmit}
				onSavedMoviesSearchSubmit={onSavedMoviesSearchSubmit}
				onMoviesFilterChange={onMoviesFilterChange}
				onSavedMoviesFilterChange={onSavedMoviesFilterChange}
				isShortSavedMoviesChecked={isShortSavedMoviesChecked}
			/>
			{isLoading && <Preloader />}

			{isError && (
				<ErrorMessage
					error={isError}
					message={errorMessage}
					className="movies__error"
				/>
			)}

			{!isLoading && !isError && (
				<MoviesCardList
					foundMovies={foundMovies}
					savedMovies={savedMovies}
					savedMoviesSubset={savedMoviesSubset}
					appClassNames={appClassNames}
					deviceWidth={DEVICE_WIDTH}
					isSavedMoviesPath={isSavedMoviesPath}
					onSave={onSave}
					onDelete={onDelete}
					initialSavedMovies={initialSavedMovies}
				/>
			)}
		</main>
	);
}
