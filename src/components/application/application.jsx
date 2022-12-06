import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import appStyles from './application.module.scss';
import { INGREDIENT_TYPES } from '../../utils/types';
import { getIngredientsData } from '../../utils/burger-api';
import { IngredientsContext } from '../../utils/context/appContext';

const Application = () => {
	const [isLoading, setIsLoading] = React.useState(true);
	const [isError, setIsError] = React.useState(false);
	const [data, setData] = React.useState([]);

	const constructorData = {
		bun: data
			.filter((item) => item.type === INGREDIENT_TYPES.BUN)
			.sort(() => Math.random() - Math.random())
			.slice(0, 1)[0],
		ingredients: data
			.filter((item) => item.type !== INGREDIENT_TYPES.BUN)
			.sort(() => Math.random() - Math.random())
			.slice(0, 5),
	};

	React.useEffect(() => {
		const WaitForResponse = async () => {
			try {
				var data = await getIngredientsData();
				setData(data);
				setIsLoading(false);
			} catch {
				setIsLoading(false);
				setIsError(true);
			}
		};
		WaitForResponse();
	}, []);

	const getAppContent = () => {
		if (isLoading) {
			return <div className={`text text_type_main-large ${appStyles.loading}`}>Перерыв на загрузку данных...</div>;
		}
		if (isError) {
			return <div className={`text text_type_main-large ${appStyles.loading}`}>Ошибка при получении данных</div>;
		}
		return (
			<div className={appStyles.homePage}>
				<BurgerIngredients data={data} />
				<IngredientsContext.Provider value={constructorData}>
					<BurgerConstructor />
				</IngredientsContext.Provider>
			</div>
		);
	};

	return (
		<div className={appStyles.wrapper}>
			<AppHeader />
			<main className={`container ${appStyles.main}`}>{getAppContent()}</main>
		</div>
	);
};

export default Application;
