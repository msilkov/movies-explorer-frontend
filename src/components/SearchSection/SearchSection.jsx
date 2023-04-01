import React from 'react';
import './SearchSection.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchSection({
	appClassNames,
	onSearchSubmit,
	onFilterChange,

}) {
	return (
		<section className="search">
			<div className="search__content">
				<SearchForm
					className="search__form"
					appClassNames={appClassNames}
					onSearchSubmit={onSearchSubmit}
				/>
				<FilterCheckbox
					label={'Короткометражки'}
					className="search__filter"
					onFilterChange={onFilterChange}
			
				/>
			</div>
		</section>
	);
}
