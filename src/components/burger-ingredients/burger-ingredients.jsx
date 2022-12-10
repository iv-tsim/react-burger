import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyles from './burger-ingredients.module.scss';
import IngredientCategory from '../ingredient-category/ingredient-category';
import { INGREDIENT_TYPES } from '../../utils/types';
import React from 'react';
import { useSelector } from 'react-redux';

const BurgerIngredients = () => {
	const data = useSelector((store) => store.ingredients.items);

	const categories = Object.values(INGREDIENT_TYPES);
	const [tabs, setTabs] = React.useState(categories.map((value) => ({ slug: value.slug, isInView: false })));
	const activeTab = tabs.filter((tab) => tab.isInView);

	return (
		<section className={`${burgerIngredientsStyles.wrapper}`}>
			<h1 className={`text text_type_main-large ${burgerIngredientsStyles.title}`}>Соберите бургер</h1>
			<div className={`${burgerIngredientsStyles.tabs}`}>
				{categories.map((category) => (
					<Tab key={category.slug} active={category.slug === activeTab[0]?.slug}>
						{category.title}
					</Tab>
				))}
			</div>
			<ul className={`${burgerIngredientsStyles.list}`}>
				{categories.map((category) => (
					<li key={category.slug} className={`${burgerIngredientsStyles.item}`}>
						<IngredientCategory data={data.filter((card) => card.type === category.slug)} {...category} setTabs={setTabs} />
					</li>
				))}
			</ul>
		</section>
	);
};

export default BurgerIngredients;
