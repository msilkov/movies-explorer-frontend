import React, { useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './SearchForm.css';
import searchIcon from '../../images/icons/search-icon.svg';
import Form from '../Form/Form';

export default function SearchForm({
	className,
	appClassNames,
	onSearchSubmit,
}) {
	const storedSearchData = JSON.parse(localStorage.getItem('storedUserSearch'));
	const storedSearchQuery = storedSearchData
		? storedSearchData.searchQuery
		: '';
	const [searchQuery, setSearchQuery] = useState(storedSearchQuery);

	useEffect(() => {
		setSearchQuery(storedSearchQuery);
}, [storedSearchQuery]);

const {
	register,
	formState: { errors, isValid },
	handleSubmit,
} = useForm({
	mode:'onBlur' 
});

	function handleFormSubmit() {
		onSearchSubmit(searchQuery);
	}

	function handleSearchInputChange(e) {
		setSearchQuery(e.target.value);
	}

	return (
		<Form className={`form-search ${className}`} onSubmit={handleSubmit(handleFormSubmit)}>
			<input
			{...register('search', {
				required: 'Введите ключевое слово для поиска',
			})}
				className="form-search__input"
				id="searchQuery"
				type="text"
				value={searchQuery}
				placeholder="Фильм"
				onChange={handleSearchInputChange}
			/>
			<span className="form-search__span">
						{errors?.search && (
							<p className="form-search__error">{errors.search.message}</p>
						)}
					</span>
			<button disabled={!isValid}
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
