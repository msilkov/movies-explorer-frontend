import React from 'react';
import './Input.css';

export default function Input({
	className,
	placeholder,
	value,
	onChange,
	...restProps
}) {
	return (
		<input
			className={`input ${className}`}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			{...restProps}
		/>
	);
}
