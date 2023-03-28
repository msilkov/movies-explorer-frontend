import React, { useState,useEffect } from 'react';
import './SearchForm.css';
import Input from '../Input/Input';
import searchIcon from '../../images/icons/search-icon.svg';
import Form from '../Form/Form';

export default function SearchForm({
	className,
	appClassNames,
	onSearchChange,
}) {
	const storedSearchData = JSON.parse(localStorage.getItem('storedUserSearch'));
	const storedSearchQuery = storedSearchData
		? storedSearchData.searchQuery
		: '';
	const [searchQuery, setSearchQuery] = useState(storedSearchQuery);

	useEffect(() => {
		setSearchQuery(storedSearchQuery);
}, [storedSearchQuery]);

	function handleSubmit(e) {
		e.preventDefault();
		onSearchChange(searchQuery);
	}

	function handleSearchInputChange(e) {
		setSearchQuery(e.target.value);
	}

	return (
		<Form className={`form-search ${className}`} onSubmit={handleSubmit}>
			<Input
				className="form-search__input"
				id="searchQuery"
				type="text"
				value={searchQuery}
				placeholder="Фильм"
				onChange={handleSearchInputChange}
				required
			/>
			<button
				className={`${appClassNames.button} form-search__button`}
				type="submit"
			>
				<img
					className="form-search__icon"
					src={searchIcon}
					alt="Иконка поиска"
				/>
			</button>
		</Form>
	);
}
