import movieTestImg from '../images/cards/movie-placeholder.jpg';

const deviceWidth = {
	MOBILE: 320,
	TABLET: 768,
	LAPTOP: 1280,
};

const userTechnologies = {
	html: 'HTML',
	css: 'CSS',
	js: 'JS',
	react: 'React',
	git: 'Git',
	express: 'Express.js',
	mongodb: 'mongoDB',
};

const portfolioLinks = [
	{
		id: '1',
		text: 'Статичный сайт',
		link: 'https://msilkov.github.io/how-to-learn/',
	},
	{
		id: '2',
		text: 'Адаптивный сайт',
		link: 'https://msilkov.github.io/russian-travel/index.html',
	},
	{
		id: '3',
		text: 'Одностраничное приложение',
		link: 'https://msilkov.github.io/mesto/',
	},
];

const appClasses = {
	content: 'app-content',
	header: 'app-header',
	main: 'app-main',
	footer: 'app-footer',
	link: 'app-link',
	button: 'app-button',
};

const cardTemplates = [
	{
		country: 'USA',
		director: 'Steven Spielberg',
		duration: 107,
		year: 1993,
		description:
			'A theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.',
		image: 'https://www.example.com/jurassic-park.jpg',
		trailerLink: 'https://www.youtube.com/watch?v=lc0UehYemQA',
		thumbnail: movieTestImg,
		owner: 'Universal Studios',
		movieId: '12345',
		nameRU: '33 слова о дизайне',
		nameEN: 'Jurassic Park',
	},
	{
		country: 'UK',
		director: 'Christopher Nolan',
		duration: 107,
		year: 2010,
		description:
			'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
		image: 'https://www.example.com/inception.jpg',
		trailerLink: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
		thumbnail: movieTestImg,
		owner: 'Warner Bros. Pictures',
		movieId: '23423356',
		nameRU: '33 слова о дизайне',
		nameEN: 'Inception',
	},
	{
		country: 'France',
		director: 'Luc Besson',
		duration: 107,
		year: 1994,
		description:
			"Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. Léon and Mathilda form an unusual relationship, as she becomes his protégée and learns the assassin's trade.",
		image: 'https://www.example.com/leon.jpg',
		trailerLink: 'https://www.youtube.com/watch?v=DcsirofJrlM',
		thumbnail: movieTestImg,
		owner: 'Gaumont',
		movieId: '345612347',
		nameRU: '33 слова о дизайне',
		nameEN: 'Léon: The Professional',
	},
	{
		country: 'France',
		director: 'Luc Besson',
		duration: 107,
		year: 1994,
		description:
			"Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. Léon and Mathilda form an unusual relationship, as she becomes his protégée and learns the assassin's trade.",
		image: 'https://www.example.com/leon.jpg',
		trailerLink: 'https://www.youtube.com/watch?v=DcsirofJrlM',
		thumbnail: movieTestImg,
		owner: 'Gaumont',
		movieId: '3453345667',
		nameRU: '33 слова о дизайне',
		nameEN: 'Léon: The Professional',
	},
	{
		country: 'France',
		director: 'Luc Besson',
		duration: 107,
		year: 1994,
		description:
			"Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. Léon and Mathilda form an unusual relationship, as she becomes his protégée and learns the assassin's trade.",
		image: 'https://www.example.com/leon.jpg',
		trailerLink: 'https://www.youtube.com/watch?v=DcsirofJrlM',
		thumbnail: movieTestImg,
		owner: 'Gaumont',
		movieId: '34654567',
		nameRU: '33 слова о дизайне',
		nameEN: 'Léon: The Professional',
	},
	{
		country: 'France',
		director: 'Luc Besson',
		duration: 107,
		year: 1994,
		description:
			"Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. Léon and Mathilda form an unusual relationship, as she becomes his protégée and learns the assassin's trade.",
		image: 'https://www.example.com/leon.jpg',
		trailerLink: 'https://www.youtube.com/watch?v=DcsirofJrlM',
		thumbnail: movieTestImg,
		owner: 'Gaumont',
		movieId: '34512367',
		nameRU: '33 слова о дизайне',
		nameEN: 'Léon: The Professional',
	},
	{
		country: 'France',
		director: 'Luc Besson',
		duration: 107,
		year: 1994,
		description:
			"Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. Léon and Mathilda form an unusual relationship, as she becomes his protégée and learns the assassin's trade.",
		image: 'https://www.example.com/leon.jpg',
		trailerLink: 'https://www.youtube.com/watch?v=DcsirofJrlM',
		thumbnail: movieTestImg,
		owner: 'Gaumont',
		movieId: '34567765',
		nameRU: '33 слова о дизайне',
		nameEN: 'Léon: The Professional',
	},
	{
		country: 'France',
		director: 'Luc Besson',
		duration: 107,
		year: 1994,
		description:
			"Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. Léon and Mathilda form an unusual relationship, as she becomes his protégée and learns the assassin's trade.",
		image: 'https://www.example.com/leon.jpg',
		trailerLink: 'https://www.youtube.com/watch?v=DcsirofJrlM',
		thumbnail: movieTestImg,
		owner: 'Gaumont',
		movieId: '346678567',
		nameRU: '33 слова о дизайне',
		nameEN: 'Léon: The Professional',
	},
	{
		country: 'France',
		director: 'Luc Besson',
		duration: 107,
		year: 1994,
		description:
			"Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. Léon and Mathilda form an unusual relationship, as she becomes his protégée and learns the assassin's trade.",
		image: 'https://www.example.com/leon.jpg',
		trailerLink: 'https://www.youtube.com/watch?v=DcsirofJrlM',
		thumbnail: movieTestImg,
		owner: 'Gaumont',
		movieId: '233',
		nameRU: '33 слова о дизайне',
		nameEN: 'Léon: The Professional',
	},
	{
		country: 'France',
		director: 'Luc Besson',
		duration: 107,
		year: 1994,
		description:
			"Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. Léon and Mathilda form an unusual relationship, as she becomes his protégée and learns the assassin's trade.",
		image: 'https://www.example.com/leon.jpg',
		trailerLink: 'https://www.youtube.com/watch?v=DcsirofJrlM',
		thumbnail: movieTestImg,
		owner: 'Gaumont',
		movieId: '3452467',
		nameRU: '33 слова о дизайне',
		nameEN: 'Léon: The Professional',
	},
	{
		country: 'France',
		director: 'Luc Besson',
		duration: 107,
		year: 1994,
		description:
			"Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. Léon and Mathilda form an unusual relationship, as she becomes his protégée and learns the assassin's trade.",
		image: 'https://www.example.com/leon.jpg',
		trailerLink: 'https://www.youtube.com/watch?v=DcsirofJrlM',
		thumbnail: movieTestImg,
		owner: 'Gaumont',
		movieId: '34561237',
		nameRU: '33 слова о дизайне',
		nameEN: 'Léon: The Professional',
	},
	{
		country: 'France',
		director: 'Luc Besson',
		duration: 107,
		year: 1994,
		description:
			"Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. Léon and Mathilda form an unusual relationship, as she becomes his protégée and learns the assassin's trade.",
		image: 'https://www.example.com/leon.jpg',
		trailerLink: 'https://www.youtube.com/watch?v=DcsirofJrlM',
		thumbnail: movieTestImg,
		owner: 'Gaumont',
		movieId: '34332567',
		nameRU: '33 слова о дизайне',
		nameEN: 'Léon: The Professional',
	},
	{
		country: 'France',
		director: 'Luc Besson',
		duration: 107,
		year: 1994,
		description:
			"Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. Léon and Mathilda form an unusual relationship, as she becomes his protégée and learns the assassin's trade.",
		image: 'https://www.example.com/leon.jpg',
		trailerLink: 'https://www.youtube.com/watch?v=DcsirofJrlM',
		thumbnail: movieTestImg,
		owner: 'Gaumont',
		movieId: '34564547',
		nameRU: '33 слова о дизайне',
		nameEN: 'Léon: The Professional',
	},
	{
		country: 'France',
		director: 'Luc Besson',
		duration: 107,
		year: 1994,
		description:
			"Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. Léon and Mathilda form an unusual relationship, as she becomes his protégée and learns the assassin's trade.",
		image: 'https://www.example.com/leon.jpg',
		trailerLink: 'https://www.youtube.com/watch?v=DcsirofJrlM',
		thumbnail: movieTestImg,
		owner: 'Gaumont',
		movieId: '34564547',
		nameRU: '33 слова о дизайне',
		nameEN: 'Léon: The Professional',
	},
	{
		country: 'France',
		director: 'Luc Besson',
		duration: 107,
		year: 1994,
		description:
			"Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. Léon and Mathilda form an unusual relationship, as she becomes his protégée and learns the assassin's trade.",
		image: 'https://www.example.com/leon.jpg',
		trailerLink: 'https://www.youtube.com/watch?v=DcsirofJrlM',
		thumbnail: movieTestImg,
		owner: 'Gaumont',
		movieId: '34555567',
		nameRU: '33 слова о дизайне',
		nameEN: 'Léon: The Professional',
	},
	{
		country: 'France',
		director: 'Luc Besson',
		duration: 107,
		year: 1994,
		description:
			"Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. Léon and Mathilda form an unusual relationship, as she becomes his protégée and learns the assassin's trade.",
		image: 'https://www.example.com/leon.jpg',
		trailerLink: 'https://www.youtube.com/watch?v=DcsirofJrlM',
		thumbnail: movieTestImg,
		owner: 'Gaumont',
		movieId: '3456547',
		nameRU: '33 слова о дизайне',
		nameEN: 'Léon: The Professional',
	},
	{
		country: 'France',
		director: 'Luc Besson',
		duration: 107,
		year: 1994,
		description:
			"Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. Léon and Mathilda form an unusual relationship, as she becomes his protégée and learns the assassin's trade.",
		image: 'https://www.example.com/leon.jpg',
		trailerLink: 'https://www.youtube.com/watch?v=DcsirofJrlM',
		thumbnail: movieTestImg,
		owner: 'Gaumont',
		movieId: '345567',
		nameRU: '33 слова о дизайне',
		nameEN: 'Léon: The Professional',
	},
	{
		country: 'France',
		director: 'Luc Besson',
		duration: 107,
		year: 1994,
		description:
			"Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. Léon and Mathilda form an unusual relationship, as she becomes his protégée and learns the assassin's trade.",
		image: 'https://www.example.com/leon.jpg',
		trailerLink: 'https://www.youtube.com/watch?v=DcsirofJrlM',
		thumbnail: movieTestImg,
		owner: 'Gaumont',
		movieId: '345667',
		nameRU: '33 слова о дизайне',
		nameEN: 'Léon: The Professional',
	},
];

export {
	userTechnologies,
	portfolioLinks,
	appClasses,
	cardTemplates,
	deviceWidth,
};
