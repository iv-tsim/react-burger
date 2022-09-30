import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import appStyles from './application.module.scss';
import getIngredientsData from '../../utils/burger-api';

const Application = () => {
	const [isLoading, setIsLoading] = React.useState(true);
	const [info, setInfo] = React.useState({
		status: '',
		data: [],
	});

	React.useEffect(() => {
		const WaitForResponse = async () => {
			var data = await getIngredientsData();
			setInfo(data);
			setIsLoading(false);
		};
		WaitForResponse();
	}, []);

	return (
		<div className={appStyles.wrapper}>
			<AppHeader />
			<main className={`container ${appStyles.main}`}>
				{isLoading ? (
					<div className={`text text_type_main-large ${appStyles.loading}`}>Перерыв на загрузку данных...</div>
				) : info.status === 'success' ? (
					<div className={appStyles.homePage}>
						<BurgerIngredients data={info.data} />
						<BurgerConstructor data={info.data} />
					</div>
				) : (
					<div className={`text text_type_main-large ${appStyles.loading}`}>Ошибка при получении данных</div>
				)}
			</main>
		</div>
	);
};

export default Application;
