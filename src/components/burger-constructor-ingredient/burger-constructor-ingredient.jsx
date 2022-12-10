import React from 'react';
import BurgerConstructorIngredientStyles from './burger-constructor-ingredient.module.scss';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { useDrop, useDrag } from 'react-dnd';

import { removeIngredient, moveIngredient } from '../../store/slices/constructorSlice';
import { useDispatch } from 'react-redux';

function BurgerConstructorIngredient({ data, index }) {
	const dispatch = useDispatch();

	return (
		<li className={`${BurgerConstructorIngredientStyles.item}`}>
			<DragIcon />
			<ConstructorElement
				{...data.data}
				text={data.data.name}
				thumbnail={data.data.image}
				handleClose={() => {
					dispatch(
						removeIngredient({
							_id: data._id,
						}),
					);
				}}
			/>
		</li>
	);
}

export default BurgerConstructorIngredient;
