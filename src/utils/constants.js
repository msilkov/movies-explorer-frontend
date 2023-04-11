const DEVICE_WIDTH = {
	MOBILE: 320,
	TABLET: 768,
	LAPTOP: 1280,
};

const USER_TECHNOLOGIES = {
	html: 'HTML',
	css: 'CSS',
	js: 'JS',
	react: 'React',
	git: 'Git',
	express: 'Express.js',
	mongodb: 'mongoDB',
};

const PORTFOLIO_LINKS = [
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

const APP_CLASSES = {
	content: 'app-content',
	header: 'app-header',
	main: 'app-main',
	footer: 'app-footer',
	link: 'app-link',
	button: 'app-button',
};

const BEATFILM_MOVIES_URL = "https://api.nomoreparties.co/beatfilm-movies";
const MAIN_API_URL = "https://api.msilkov.diploma.nomoredomains.work";

export {
	USER_TECHNOLOGIES,
	PORTFOLIO_LINKS,
	APP_CLASSES,
	DEVICE_WIDTH,
	BEATFILM_MOVIES_URL,
	MAIN_API_URL
};
