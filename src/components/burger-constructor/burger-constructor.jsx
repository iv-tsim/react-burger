import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyles from './burger-constructor.module.scss';
import React from 'react';
import Modal from '../modal/modal';
import { INGREDIENT_TYPES } from '../../utils/types';
import OrderDetails from '../order-details/order-details';
import BlankIngredient from '../blank-ingredient/blank-ingredient';
import BurgerConstructorIngredient from '../burger-constructor-ingredient/burger-constructor-ingredient';
import { useSelector, useDispatch } from 'react-redux';
import { addIngredient, setBun } from '../../store/slices/constructorSlice';
import { useDrop } from 'react-dnd';
import uuid from 'react-uuid';

const BurgerConstructor = () => {
	const [isModalOpened, setIsModalOpened] = React.useState(false);
	const { totalPrice } = useSelector((state) => state.ingredientConstructor);
	const { bun, ingredients } = useSelector((state) => state.ingredientConstructor.items);

	const dispatch = useDispatch();

	const onDropHandler = React.useCallback(
		({ data }) => {
			if (data.type === INGREDIENT_TYPES.BUN.slug) {
				dispatch(
					setBun({
						_id: uuid(),
						data,
					}),
				);
			} else {
				dispatch(
					addIngredient({
						_id: uuid(),
						data,
					}),
				);
			}
		},
		[dispatch],
	);

	const [{ isHover }, dropTarget] = useDrop({
		accept: 'ingredient',
		drop(data) {
			onDropHandler(data);
		},
		collect: (monitor) => ({
			isHover: monitor.isOver(),
		}),
	});

	const onModalOpen = () => {
		setIsModalOpened(true);
	};

	const onModalClose = () => {
		setIsModalOpened(false);
	};

	return (
		<>
			<section className={`${burgerConstructorStyles.wrapper}`}>
				<div ref={dropTarget} className={`${burgerConstructorStyles.main} ${isHover ? burgerConstructorStyles.main_hovered : ''}`}>
					<div className={`${burgerConstructorStyles.bun}`}>
						{bun ? (
							<ConstructorElement {...bun.data} type="top" text={bun.data.name} thumbnail={bun.data.image} isLocked={true} />
						) : (
							<BlankIngredient type="top" text="Выберите булку" />
						)}
					</div>
					{ingredients?.length ? (
						<ul className={`${burgerConstructorStyles.list}`}>
							{ingredients.map((element, index) => (
								<BurgerConstructorIngredient data={element} index={index} key={element._id} />
							))}
						</ul>
					) : (
						<div className={`${burgerConstructorStyles.bun}`}>
							<BlankIngredient text="Выберите ингредиент" />
						</div>
					)}
					<div className={`${burgerConstructorStyles.bun}`}>
						{bun ? (
							<ConstructorElement {...bun.data} type="bottom" text={bun.data.name} thumbnail={bun.data.image} isLocked={true} />
						) : (
							<BlankIngredient type="bottom" text="Выберите булку" />
						)}
					</div>
				</div>
				<div className={`${burgerConstructorStyles.bottom}`}>
					<div className={`${burgerConstructorStyles.price}`}>
						<div className={`text text_type_digits-medium ${burgerConstructorStyles.number}`}>{totalPrice}</div>
						<CurrencyIcon />
					</div>
					<Button onClick={onModalOpen} htmlType="button" type="primary" size="large">
						Оформить заказ
					</Button>
				</div>
			</section>
			{isModalOpened && (
				<Modal onModalClose={onModalClose}>
					<OrderDetails />
				</Modal>
			)}
		</>
	);
};

export default BurgerConstructor;
