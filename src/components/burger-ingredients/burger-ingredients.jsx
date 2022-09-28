import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyles from './burger-ingredients.module.scss';
import propTypes from '../../utils/prop-types';
import IngredientCategory from '../ingredient-category/ingredient-category';
import { INGREDIENT_TYPES } from '../../utils/types';

const BurgerIngredients = ({ data }) => {
	const buns = data.filter((card) => card.type === INGREDIENT_TYPES.BUN);
	const sauces = data.filter((card) => card.type === INGREDIENT_TYPES.SAUCE);
	const mains = data.filter((card) => card.type === INGREDIENT_TYPES.MAIN);

	return (
		<section className={`${burgerIngredientsStyles.wrapper}`}>
			<h1 className={`text text_type_main-large ${burgerIngredientsStyles.title}`}>Соберите бургер</h1>
			<div className={`${burgerIngredientsStyles.tabs}`}>
				<Tab active={true}>Булки</Tab>
				<Tab>Соусы</Tab>
				<Tab>Начинки</Tab>
			</div>
			<ul className={`${burgerIngredientsStyles.list}`}>
				<li className={`${burgerIngredientsStyles.item}`}>
					<IngredientCategory data={buns} title="Булки" />
				</li>
				<li className={`${burgerIngredientsStyles.item}`}>
					<IngredientCategory data={sauces} title="Соусы" />
				</li>
				<li className={`${burgerIngredientsStyles.item}`}>
					<IngredientCategory data={mains} title="Начинки" />
				</li>
			</ul>
		</section>
	);
};

BurgerIngredients.propTypes = propTypes;

export default BurgerIngredients;
