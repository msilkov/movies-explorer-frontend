import React from 'react';
import './SearchSection.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchSection() {
	return (
		<section className="search">
			<div className="search__content">
				<SearchForm className="search__form" />
				<FilterCheckbox label={'Короткометражки'} className="search__filter" />
			</div>
		</section>
	);
}
