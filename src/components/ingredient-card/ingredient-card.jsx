import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import ingredientCardStyles from './ingredient-card.module.scss';
import { ingredientPropTypes } from '../../utils/ingredientPropTypes';

import { useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';

const IngredientCard = ({ data, onModalOpen }) => {
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

	return (
		<>
			<li ref={dragRef} className={`${ingredientCardStyles.card} ${isDrag ? ingredientCardStyles.card_dragging : ''}`} onClick={() => onModalOpen(data)}>
				<Counter count={count} size="default" />
				<img src={image} alt={name} className={`${ingredientCardStyles.card__img}`} />
				<div className={`${ingredientCardStyles.card__price}`}>
					<span className={`text text_type_digits-default ${ingredientCardStyles.card__number}`}>{price}</span>
					<CurrencyIcon />
				</div>
				<h3 className={`text text_type_main-default ${ingredientCardStyles.card__title}`}>{name}</h3>
			</li>
		</>
	);
};

IngredientCard.propTypes = {
	data: ingredientPropTypes.isRequired,
	onModalOpen: PropTypes.func.isRequired,
};

export default IngredientCard;
