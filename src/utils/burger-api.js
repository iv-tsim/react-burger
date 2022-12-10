export const BASE_API_URL = 'https://norma.nomoreparties.space/api';
export const INGREDIENTS_URL = `${BASE_API_URL}/ingredients`;
export const ORDER_DETAILS_URL = `${BASE_API_URL}/orders`;

const checkReponse = (res) => {
	return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getIngredientsData = () => {
	return fetch(INGREDIENTS_URL)
		.then((response) => checkReponse(response))
		.then((response) => {
			return response;
		})
		.catch((error) => {
			throw new Error(error);
		});
};

export const getOrderDetails = (data) => {
	return fetch(ORDER_DETAILS_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(data),
	})
		.then((response) => checkReponse(response))
		.then((response) => {
			return response;
		})
		.catch((error) => {
			throw new Error(error);
		});
};
