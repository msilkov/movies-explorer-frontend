import React from 'react';
import Header from '../Header/Header';
import './App.css';

const classes = {
  content: 'app__content',
  header: 'app__header',
  link: 'app__link',
  button: 'app__button',
};

export default function App() {
  return (
    <div className="app__content">
      <Header className={classes} />
    </div>
  );
}
