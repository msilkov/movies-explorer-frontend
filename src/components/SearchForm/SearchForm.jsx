import React, { useState } from 'react';
import './SearchForm.css';
import Input from '../Input/Input';
import searchIcon from '../../images/icons/search-icon.svg';
import Form from '../Form/Form';

export default function SearchForm({ className, appClassNames }) {
	const [searchQuery, setSearchQuery] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		console.log(searchQuery);
	}

	return (
		<Form className={`form-search ${className}`} onSubmit={handleSubmit}>
			<Input
				className="form-search__input"
				id="searchQuery"
				type="text"
				value={searchQuery}
				placeholder="Фильм"
				onChange={(event) => setSearchQuery(event.target.value)}
				required
			/>
			<button
				className={`${appClassNames.button} form-search__button`}
				type="submit"
			>
				<img className="form-search__icon" src={searchIcon} alt="Иконка поиска" />
			</button>
		</Form>
	);
}
