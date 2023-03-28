import React from 'react';
import './ErrorMessage.css';

export default function ErrorMessage({message, className}) {
	return <p className={`error-message ${className}`}>{message}</p>;
}
