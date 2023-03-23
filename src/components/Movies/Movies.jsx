import React from 'react';
import SearchSection from '../SearchSection/SearchSection';
import './Movies.css';
import { cardTemplates } from '../../utils/constants';
import { deviceWidth } from '../../utils/constants';

import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function Movies({ appClassNames, isSavedMovies }) {
	return (
		<main className={`${appClassNames.main} main`}>
			<SearchSection appClassNames={appClassNames}/>
			<MoviesCardList
				movies={cardTemplates}
				appClassNames={appClassNames}
				deviceWidth={deviceWidth}
				isSavedMovies={isSavedMovies}
			/>
		</main>
	);
}
