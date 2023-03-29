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
	onSearchChange,
	isLoading,
	foundMovies,
	savedMovies,
	isError,
	errorMessage,
	onFilterChange,
	isFilterChecked,
	onSave,
	onDelete,
}) {
	return (
		<main className={`${appClassNames.main} movies`}>
			<SearchSection
				appClassNames={appClassNames}
				onSearchChange={onSearchChange}
				onFilterChange={onFilterChange}
				isFilterChecked={isFilterChecked}
			/>
			{isLoading && <Preloader />}

			{isError && (
				<ErrorMessage message={errorMessage} className="movies__error" />
			)}

			{!isLoading && !isError && (
				<MoviesCardList
					foundMovies={foundMovies}
					savedMovies={savedMovies}
					appClassNames={appClassNames}
					deviceWidth={DEVICE_WIDTH}
					isSavedMoviesPath={isSavedMoviesPath}
					onSave={onSave}
					onDelete={onDelete}
				/>
			)}
		</main>
	);
}
