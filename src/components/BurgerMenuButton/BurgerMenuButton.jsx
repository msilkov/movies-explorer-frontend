import React, { useState } from 'react';
import './BurgerMenuButton.css';

export default function BurgerMenuButton({ className }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      type="button"
      className={`burger-menu-button ${className.button}`}
      onClick={handleClick}
    >
      <span className={`burger-menu-button__line ${isActive ? 'burger-menu-button__line_state_active' : ''}`} />
      <span className={`burger-menu-button__line ${isActive ? 'burger-menu-button__line_state_active' : ''}`} />
      <span className={`burger-menu-button__line ${isActive ? 'burger-menu-button__line_state_active' : ''}`} />
      <span className={`burger-menu-button__line ${isActive ? 'burger-menu-button__line_state_active' : ''}`} />
    </button>
  );
}
