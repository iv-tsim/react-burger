export const BASE_API_URL = 'https://norma.nomoreparties.space/api';
export const INGREDIENTS_URL = `${BASE_API_URL}/ingredients`;

const checkReponse = (res) => {
	return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

const getIngredientsData = () => {
	return fetch(INGREDIENTS_URL)
		.then((response) => checkReponse(response))
		.then((response) => {
			return {
				status: 'success',
				data: response.data,
			};
		})
		.catch(() => {
			return {
				status: 'error',
			};
		});
};

export default getIngredientsData;
