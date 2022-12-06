import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyles from './burger-constructor.module.scss';
import React from 'react';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { OrderContext, IngredientsContext } from '../../utils/store/appContext';

import { getOrderDetails } from '../../utils/burger-api';

const BurgerConstructor = () => {
	const [isModalOpened, setIsModalOpened] = React.useState(false);
	const [isError, setIsError] = React.useState(false);
	const [orderData, setOrderData] = React.useState(null);
	const [isLoading, setIsLoading] = React.useState(true);

	const constructorData = React.useContext(IngredientsContext);

	const onModalOpen = () => {
		const WaitForResponse = async () => {
			try {
				var data = await getOrderDetails({
					ingredients: constructorData.ingredients.map((item) => item._id),
				});
				setOrderData(data);
				setIsError(false);
				setIsLoading(false);
			} catch {
				setIsLoading(false);
				setIsError(true);
			}
		};
		WaitForResponse();
		setIsModalOpened(true);
	};

	const onModalClose = () => {
		setIsModalOpened(false);
	};

	return (
		<>
			<section className={`${burgerConstructorStyles.wrapper}`}>
				<div className={`${burgerConstructorStyles.main}`}>
					<div className={`${burgerConstructorStyles.bun}`}>
						<ConstructorElement {...constructorData.bun} type="top" text={constructorData.bun.name} thumbnail={constructorData.bun.image} />
					</div>
					<ul className={`${burgerConstructorStyles.list}`}>
						{constructorData.ingredients.map((element) => (
							<li key={element._id} className={`${burgerConstructorStyles.item}`}>
								<DragIcon />
								<ConstructorElement {...element} text={element.name} thumbnail={element.image} />
							</li>
						))}
					</ul>
					<div className={`${burgerConstructorStyles.bun}`}>
						<ConstructorElement {...constructorData.bun} type="bottom" text={constructorData.bun.name} thumbnail={constructorData.bun.image} />
					</div>
				</div>
				<div className={`${burgerConstructorStyles.bottom}`}>
					<div className={`${burgerConstructorStyles.price}`}>
						<div className={`text text_type_digits-medium ${burgerConstructorStyles.number}`}>
							{constructorData.bun.price * 2 + constructorData.ingredients.reduce((sum, item) => (sum += item.price), 0)}
						</div>
						<CurrencyIcon />
					</div>
					<Button onClick={onModalOpen} htmlType="button" type="primary" size="large">
						Оформить заказ
					</Button>
				</div>
			</section>
			{isModalOpened && (
				<Modal onModalClose={onModalClose}>
					<OrderContext.Provider value={{ orderData, isError, isLoading }}>
						<OrderDetails />
					</OrderContext.Provider>
				</Modal>
			)}
		</>
	);
};

export default BurgerConstructor;
