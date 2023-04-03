import React from 'react';
import './SearchSection.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchSection({
	appClassNames,
	onMoviesSearchSubmit,
	onSavedMoviesSearchSubmit,
	onMoviesFilterChange,
	onSavedMoviesFilterChange,
	isShortSavedMoviesChecked,
}) {
	return (
		<section className="search">
			<div className="search__content">
				<SearchForm
					className="search__form"
					appClassNames={appClassNames}
					onMoviesSearchSubmit={onMoviesSearchSubmit}
				onSavedMoviesSearchSubmit={onSavedMoviesSearchSubmit}
				/>
				<FilterCheckbox
					label={'Короткометражки'}
					className="search__filter"
				onMoviesFilterChange={onMoviesFilterChange}
				onSavedMoviesFilterChange={onSavedMoviesFilterChange}
				isShortSavedMoviesChecked={isShortSavedMoviesChecked}
			
				/>
			</div>
		</section>
	);
}
