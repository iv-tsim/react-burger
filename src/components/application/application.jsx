import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import appStyles from './application.module.scss';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { useSelector, useDispatch } from 'react-redux';
import { fetchIngredients } from '../../store/slices/ingredientsSlice';

const Application = () => {
	const dispatch = useDispatch();

	const status = useSelector((store) => store.ingredients.status);

	React.useEffect(() => {
		dispatch(fetchIngredients());
	}, [dispatch]);

	const getAppContent = () => {
		if (status === 'loading') {
			return <div className={`text text_type_main-large ${appStyles.loading}`}>Перерыв на загрузку данных...</div>;
		}
		if (status === 'error') {
			return <div className={`text text_type_main-large ${appStyles.loading}`}>Ошибка при получении данных</div>;
		}
		return (
			<div className={appStyles.homePage}>
				<DndProvider backend={HTML5Backend}>
					<BurgerIngredients />
					<BurgerConstructor />
				</DndProvider>
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
