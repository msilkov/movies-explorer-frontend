import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Form from '../Form/Form';
import searchIcon from '../../images/icons/search-icon.svg';
import './SearchForm.css';

export default function SearchForm({
	className,
	appClassNames,
	onMoviesSearchSubmit,
	onSavedMoviesSearchSubmit,
}) {
	const [searchQuery, setSearchQuery] = useState('');
	const [searchError, setSearchError] = useState('');
	const location = useLocation();
	const IsSavedMoviesPath = location.pathname === '/saved-movies';
	const IsMoviesPath = location.pathname === '/movies';

	useEffect(() => {
		const userSearchQuery = JSON.parse(localStorage.getItem('searchQuery'));
		const storedSearchQuery = IsMoviesPath ? userSearchQuery : '';
		setSearchQuery(storedSearchQuery);
	}, [IsMoviesPath]);

	function handleFormSubmit(e) {
		e.preventDefault();
		if (searchQuery.trim() === '') {
			setSearchError('Введите ключевое слово для поиска');
		} else {
			setSearchError('');
			if (IsSavedMoviesPath) {
				onSavedMoviesSearchSubmit(searchQuery);
			} else if (IsMoviesPath) {
				onMoviesSearchSubmit(searchQuery);
			}
		}
	}

	function handleSearchInputChange(e) {
		setSearchQuery(e.target.value);
	}

	return (
		<Form
			className={`form-search ${className}`}
			onSubmit={handleFormSubmit}
		>
			<input
				className="form-search__input"
				id="searchQuery"
				type="text"
				value={searchQuery === null ? '' : searchQuery}
				placeholder="Фильм"
				onChange={handleSearchInputChange}
			/>
			<span className="form-search__span">
				{searchError && (
					<p className="form-search__error">{searchError}</p>
				)}
			</span>
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
