import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/ingredientPropTypes';
import ingredientCategoryStyles from './ingredient-category.module.scss';
import IngredientCard from '../ingredient-card/ingredient-card';
import { useInView } from 'react-intersection-observer';
import React from 'react';

const IngredientCategory = ({ data, title, slug, setTabs }) => {
	const { ref, inView } = useInView();

	React.useEffect(() => {
		setTabs((prev) => [...prev.map((tab) => (tab.slug === slug ? { ...tab, isInView: inView } : tab))]);
	}, [setTabs, slug, inView]);

	return (
		<section ref={ref}>
			<h2 className={`text text_type_main-medium ${ingredientCategoryStyles.category__title}`}>{title}</h2>
			<ul className={`${ingredientCategoryStyles.category__list}`}>
				{data.map((card) => (
					<IngredientCard key={card._id} data={card} />
				))}
			</ul>
		</section>
	);
};

IngredientCategory.propTypes = {
	data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
	title: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
	setTabs: PropTypes.func.isRequired,
};

export default IngredientCategory;
