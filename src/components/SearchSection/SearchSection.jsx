import React from 'react';
import './SearchSection.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchSection({
	appClassNames,
	onSearchChange,
	onFilterChange,
	isFilterChecked,

}) {
	return (
		<section className="search">
			<div className="search__content">
				<SearchForm
					className="search__form"
					appClassNames={appClassNames}
					onSearchChange={onSearchChange}

				/>
				<FilterCheckbox
					label={'Короткометражки'}
					className="search__filter"
					onFilterChange={onFilterChange}
					checked={isFilterChecked}
				/>
			</div>
		</section>
	);
}
