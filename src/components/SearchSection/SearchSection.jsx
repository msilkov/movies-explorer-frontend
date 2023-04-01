import React from 'react';
import './SearchSection.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchSection({
	appClassNames,
	onSearchSubmit,
	onFilterChange,
	onFilterClick,
	isFilterChecked,
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
					onFilterClick={onFilterClick}
					checked={isFilterChecked}
				/>
			</div>
		</section>
	);
}
