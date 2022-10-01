import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import appStyles from './application.module.scss';
import { getIngredientsData } from '../../utils/burger-api';

const Application = () => {
	const [isLoading, setIsLoading] = React.useState(true);
	const [isError, setIsError] = React.useState(false);
	const [data, setData] = React.useState([]);

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
				<BurgerConstructor data={data} />
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
