import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import Form from '../Form/Form';
import searchIcon from '../../images/icons/search-icon.svg';
import './SearchForm.css';

export default function SearchForm({
	className,
	appClassNames,
	onSearchSubmit,
}) {

	const [searchQuery, setSearchQuery] = useState('');
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const location = useLocation();

	useEffect(() => {
		const userSearchQuery = JSON.parse(localStorage.getItem('searchQuery'));
		const storedSearchQuery =
			location.pathname === '/movies' ? userSearchQuery : '';

		setSearchQuery(storedSearchQuery);
	}, [location.pathname]);

	function handleFormSubmit() {
		onSearchSubmit(searchQuery);
	}

	function handleSearchInputChange(e) {
		setSearchQuery(e.target.value);
	}

	return (
		<Form
			className={`form-search ${className}`}
			onSubmit={handleSubmit(handleFormSubmit)}
		>
			<input
				{...register('search', {
					
					message: 'Введите ключевое слово для поиска',
					validate: (value) =>
						value.trim() !== '' || 'Введите ключевое слово для поиска',
				})}
				className="form-search__input"
				id="searchQuery"
				type="text"
				value={searchQuery === null ? '' : searchQuery}
				placeholder="Фильм"
				onChange={handleSearchInputChange}
			/>
			<span className="form-search__span">
				{errors?.search && (
					<p className="form-search__error">{errors.search.message}</p>
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
