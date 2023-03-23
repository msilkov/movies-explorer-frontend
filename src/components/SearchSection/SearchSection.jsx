import React from 'react';
import './SearchSection.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchSection({appClassNames}) {
	return (
		<section className="search">
			<div className="search__content">
				<SearchForm className="search__form" appClassNames={appClassNames}/>
				<FilterCheckbox label={'Короткометражки'} className="search__filter" />
			</div>
		</section>
	);
}
