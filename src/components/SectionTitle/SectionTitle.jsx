import React from 'react';
import './SectionTitle.css';

export default function SectionTitle({ titleText, className }) {
	return <h2 className={`section-title ${className}`}>{titleText}</h2>;
}
