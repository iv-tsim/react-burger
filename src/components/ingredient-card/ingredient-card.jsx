import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientCardStyles from './ingredient-card.module.scss';
import { ingredientPropTypes } from '../../utils/ingredientPropTypes';
import React from 'react';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentIngredient, clearCurrentIngredient } from '../../store/slices/ingredientDetailsSlice';
import { useDrag } from 'react-dnd';

const IngredientCard = ({ data }) => {
	const dispatch = useDispatch();
	const [isModalOpened, setIsModalOpened] = React.useState(false);

	const { image, name, price, _id } = data;

	const items = useSelector((store) => store.ingredientConstructor.items);

	const isCurrentBun = items.bun?.data._id === _id;

	let count = 0;

	if (isCurrentBun) {
		count = 2;
	} else {
		count = items.ingredients.filter((item) => item.data._id === _id).length;
	}

	const [{ isDrag }, dragRef] = useDrag({
		type: 'ingredient',
		item: {
			data,
		},
		collect: (monitor) => ({
			isDrag: monitor.isDragging(),
		}),
	});

	const onModalOpen = () => {
		dispatch(setCurrentIngredient(data));
		setIsModalOpened(true);
	};

	const onModalClose = () => {
		dispatch(clearCurrentIngredient());
		setIsModalOpened(false);
	};

	return (
		<>
			<li ref={dragRef} className={`${ingredientCardStyles.card} ${isDrag ? ingredientCardStyles.card_dragging : ''}`} onClick={onModalOpen}>
				<Counter count={count} size="default" />
				<img src={image} alt={name} className={`${ingredientCardStyles.card__img}`} />
				<div className={`${ingredientCardStyles.card__price}`}>
					<span className={`text text_type_digits-default ${ingredientCardStyles.card__number}`}>{price}</span>
					<CurrencyIcon />
				</div>
				<h3 className={`text text_type_main-default ${ingredientCardStyles.card__title}`}>{name}</h3>
			</li>
			{isModalOpened && (
				<Modal onModalClose={onModalClose}>
					<IngredientDetails />
				</Modal>
			)}
		</>
	);
};

IngredientCard.propTypes = {
	data: ingredientPropTypes.isRequired,
};

export default IngredientCard;
