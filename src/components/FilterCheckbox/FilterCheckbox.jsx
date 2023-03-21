import React from 'react';
import './FilterCheckbox.css';

export default function FilterCheckbox({ label , className }) {
	return (
		<article className={`filterCheckbox ${className}`}>
			<label className="filterCheckbox__label">
				<input
					className="filterCheckbox__input-default"
					type="checkbox"
					id="ios-switch"
					name="ios-switch"
				/>
				<div className="filterCheckbox__checkbox-area">
					<div className="filterCheckbox__toggle-point"></div>
				</div>
				<span className="filterCheckbox__label-text"> {label}</span>
			</label>
		</article>
	);
}
