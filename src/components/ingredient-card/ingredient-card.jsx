import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientCardStyles from './ingredient-card.module.scss';

const IngredientCard = ({ image, price, name }) => {
	return (
		<li className={`${ingredientCardStyles.card}`}>
			<Counter count={1} size="default" />
			<img src={image} alt={name} className={`${ingredientCardStyles.card__img}`} />
			<div className={`${ingredientCardStyles.card__price}`}>
				<span className={`text text_type_digits-default ${ingredientCardStyles.card__number}`}>{price}</span>
				<CurrencyIcon />
			</div>
			<h3 className={`text text_type_main-default ${ingredientCardStyles.card__title}`}>{name}</h3>
		</li>
	);
};

export default IngredientCard;
