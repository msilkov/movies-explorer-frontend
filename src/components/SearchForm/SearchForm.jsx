import React, { useState } from 'react';
import './SearchForm.css';
import { appClasses } from '../../utils/constants';
import Input from '../Input/Input';
import searchIcon from '../../images/icons/search-icon.svg';

export default function SearchForm({ className }) {
	const [searchQuery, setSearchQuery] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		console.log(searchQuery);
	}

	return (
		<form className={`form-search ${className}`} onSubmit={handleSubmit}>
			<Input
				className="form-search__input"
				id="searchQuery"
				type="text"
				value={searchQuery}
				placeholder="Фильм"
				onChange={(event) => setSearchQuery(event.target.value)}
			/>
			<button
				className={`${appClasses.button} form-search__button`}
				type="submit"
			>
				<img className="form-search__icon" src={searchIcon} alt="Иконка поиска" />
			</button>
		</form>
	);
}
