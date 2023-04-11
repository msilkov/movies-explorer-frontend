import React from 'react';
import './ErrorMessage.css';

export default function ErrorMessage({ error, success, message, className }) {
	return (
		<>
			{error && <p className={`error-message ${className}`}>{message}</p>}
			{success && <p className={`success-message ${className}`}>{message}</p>}
		</>
	);
}
