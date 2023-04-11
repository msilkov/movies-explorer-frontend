import { BEATFILM_MOVIES_URL } from './constants';

const request = ({ method = 'GET', data }) => {
	const options = {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		...(!!data && { body: JSON.stringify(data) }),
	};

	return fetch(`${BEATFILM_MOVIES_URL}`, options).then((res) => {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(res.status);
	});
};

export const getMovies = (method = 'GET') => {
	return request(method);
};
