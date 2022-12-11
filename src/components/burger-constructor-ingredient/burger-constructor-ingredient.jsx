import React from 'react';
import BurgerConstructorIngredientStyles from './burger-constructor-ingredient.module.scss';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/ingredientPropTypes';

import { useDrop, useDrag } from 'react-dnd';

import { removeIngredient, moveIngredient } from '../../store/slices/constructorSlice';
import { useDispatch } from 'react-redux';

function BurgerConstructorIngredient({ data, index }) {
	const dispatch = useDispatch();

	const ref = React.useRef(null);
	const [{ handlerId }, drop] = useDrop({
		accept: 'draggedIngredients',
		collect(monitor) {
			return {
				handlerId: monitor.getHandlerId(),
			};
		},
		hover(item, monitor) {
			if (!ref.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;
			if (dragIndex === hoverIndex) {
				return;
			}
			const hoverBoundingRect = ref.current?.getBoundingClientRect();
			const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			const clientOffset = monitor.getClientOffset();
			const hoverClientY = clientOffset.y - hoverBoundingRect.top;
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}
			// Dragging upwards
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}
			dispatch(
				moveIngredient({
					data,
					newIndex: hoverIndex,
					currentIndex: dragIndex,
				}),
			);
			item.index = hoverIndex;
		},
	});
	const [{ isDragging }, drag] = useDrag({
		type: 'draggedIngredients',
		item: () => {
			return { id: data._id, index };
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});
	drag(drop(ref));

	return (
		<li
			ref={ref}
			data-handler-id={handlerId}
			className={`${BurgerConstructorIngredientStyles.item} ${isDragging ? BurgerConstructorIngredientStyles.item_dragging : ''}`}>
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

BurgerConstructorIngredient.propTypes = {
	data: PropTypes.shape({
		_id: PropTypes.string.isRequired,
		data: ingredientPropTypes.isRequired,
	}).isRequired,
	index: PropTypes.number.isRequired,
};

export default BurgerConstructorIngredient;
