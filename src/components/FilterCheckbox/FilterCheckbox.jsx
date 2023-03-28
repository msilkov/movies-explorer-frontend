import React from 'react';
import Input from '../Input/Input';
import './FilterCheckbox.css';

export default function FilterCheckbox({
	label,
	className,
	onFilterChange,
	checked,
}) {
	return (
		<article className={`filterCheckbox ${className}`}>
			<label className="filterCheckbox__label">
				<Input
					className="filterCheckbox__input-default"
					type="checkbox"
					id="ios-switch"
					name="ios-switch"
					onChange={onFilterChange}
					checked={checked}
				/>
				<span className="filterCheckbox__checkbox-area">
					<span className="filterCheckbox__toggle-point"></span>
				</span>
				<span className="filterCheckbox__label-text"> {label}</span>
			</label>
		</article>
	);
}
