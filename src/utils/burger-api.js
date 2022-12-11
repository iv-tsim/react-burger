export const BASE_API_URL = 'https://norma.nomoreparties.space/api';
export const INGREDIENTS_URL = `${BASE_API_URL}/ingredients`;
export const ORDER_DETAILS_URL = `${BASE_API_URL}/orders`;

const checkResponse = (res) => {
	return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const fetchRequest = (url, options) => {
	return fetch(url, options).then(checkResponse);
};
