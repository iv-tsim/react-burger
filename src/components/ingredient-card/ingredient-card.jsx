import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientCardStyles from './ingredient-card.module.scss';
import { ingredientPropTypes } from '../../utils/ingredientPropTypes';
import React from 'react';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

const IngredientCard = ({ data }) => {
	const [isModalOpened, setIsModalOpened] = React.useState(false);

	const { image, name, price } = data;

	const onModalOpen = () => {
		setIsModalOpened(true);
	};

	const onModalClose = () => {
		setIsModalOpened(false);
	};

	return (
		<>
			<li className={`${ingredientCardStyles.card}`} onClick={onModalOpen}>
				<Counter count={1} size="default" />
				<img src={image} alt={name} className={`${ingredientCardStyles.card__img}`} />
				<div className={`${ingredientCardStyles.card__price}`}>
					<span className={`text text_type_digits-default ${ingredientCardStyles.card__number}`}>{price}</span>
					<CurrencyIcon />
				</div>
				<h3 className={`text text_type_main-default ${ingredientCardStyles.card__title}`}>{name}</h3>
			</li>
			{isModalOpened && (
				<Modal onModalClose={onModalClose}>
					<IngredientDetails data={data} />
				</Modal>
			)}
		</>
	);
};

IngredientCard.propTypes = {
	data: ingredientPropTypes.isRequired,
};

export default IngredientCard;
