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

export const register = (password, email) => {
	return request({
		url: '/signup',
		data: { password, email },
	});
};

export const login = (password, email) => {
	return request({
		url: '/signin',
		credentials: 'include',
		data: { password, email },
	});
};

export const logout = () => {
	return request({
		url: '/logout',
		method: 'GET',
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
