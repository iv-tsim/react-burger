import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import appStyles from './application.module.scss';

const DATA_LINK = 'https://norma.nomoreparties.space/api/ingredients';

const Application = () => {
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		fetch(DATA_LINK)
			.then((res) => res.json())
			.then((res) => setData(res.data))
			.catch((error) => {
				throw new Error(error);
			});
	}, []);

	return (
		<>
			<AppHeader />
			<main className={`container ${appStyles.main}`}>
				{data.length && <BurgerIngredients data={data} />}
				{data.length && <BurgerConstructor data={data} />}
			</main>
		</>
	);
};

export default Application;
