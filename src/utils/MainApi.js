import { MAIN_API_URL } from './constants';

const request = ({
	url,
	method = 'POST',
	credentials = 'same-origin',
	data,
}) => {
	return fetch(`${MAIN_API_URL}${url}`, {
		method,
		credentials,
		headers: {
			'Content-Type': 'application/json',
		},
		...(!!data && { body: JSON.stringify(data) }),
	}).then((res) =>
		res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
	);
};

export const register = (name, email, password) => {
	return request({
		url: '/signup',
		data: { name, email, password },
	});
};

export const login = (email, password) => {
	return request({
		url: '/signin',
		credentials: 'include',
		data: { email, password },
	});
};

export const logout = () => {
	return request({
		url: '/signout',
		method: 'POST',
		credentials: 'include',
	});
};

export const getUserInfo = () => {
	return request({
		url: '/users/me',
		method: 'GET',
		credentials: 'include',
	});
};

export const patchUserInfo = (name, email) => {
	return request({
		url: '/users/me',
		method: 'PATCH',
		credentials: 'include',
		data: { name, email },
	});
};

export const getSavedMovies = () => {
	return request({
		url: '/movies',
		method: 'GET',
		credentials: 'include',
	});
};

export const addSavedMovie = (movie) => {
	return request({
		url: '/movies',
		method: 'POST',
		credentials: 'include',
		data: {
			country: movie.country,
			director: movie.director,
			duration: movie.duration,
			year: movie.year,
			description: movie.description,
			image: `https://api.nomoreparties.co${movie.image.url}`,
			trailerLink: movie.trailerLink,
			thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
			movieId: movie.id.toString(),
			nameRU: movie.nameRU,
			nameEN: movie.nameEN,
		},
	});
};

export const deleteSavedMovie = (id)=>{
  return request({
		url: `/movies/${id}`,
		method: 'DELETE',
		credentials: 'include',
	});
}