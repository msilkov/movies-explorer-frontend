import React from 'react';
import './FilterCheckbox.css';
import { useLocation } from 'react-router-dom';

export default function FilterCheckbox({
	label,
	className,
	onMoviesFilterChange,
	onSavedMoviesFilterChange,
	isShortSavedMoviesChecked,
}) {
	const location = useLocation();
	const IsSavedMoviesPath = location.pathname === '/saved-movies';
	const IsMoviesPath = location.pathname === '/movies';

	const setFilterCheckboxisChecked = () => {
		if (IsMoviesPath) {
			return JSON.parse(localStorage.getItem('moviesCheckbox'));
		} else if (IsSavedMoviesPath) {
			return isShortSavedMoviesChecked;
		}
	};

	const handleCheckboxChange = () => {
		if (IsSavedMoviesPath) {
			onSavedMoviesFilterChange();
		} else if (IsMoviesPath) {
			onMoviesFilterChange();
		}
	};
	return (
		<article className={`filterCheckbox ${className}`}>
			<label className="filterCheckbox__label">
				<input
					className="filterCheckbox__input-default"
					type="checkbox"
					id="ios-switch"
					name="ios-switch"
					onChange={handleCheckboxChange}
					checked={setFilterCheckboxisChecked()}
				/>
				<span className="filterCheckbox__checkbox-area">
					<span className="filterCheckbox__toggle-point"></span>
				</span>
				<span className="filterCheckbox__label-text"> {label}</span>
			</label>
		</article>
	);
}
