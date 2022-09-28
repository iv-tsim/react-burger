import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/ingredientPropTypes';
import ingredientCategoryStyles from './ingredient-category.module.scss';
import IngredientCard from '../ingredient-card/ingredient-card';

const IngredientCategory = ({ data, title }) => {
	return (
		<section className={`${ingredientCategoryStyles.category}`}>
			<h2 className={`text text_type_main-medium ${ingredientCategoryStyles.category__title}`}>{title}</h2>
			<ul className={`${ingredientCategoryStyles.category__list}`}>
				{data.map((card) => (
					<IngredientCard key={card._id} {...card} />
				))}
			</ul>
		</section>
	);
};

IngredientCategory.propTypes = {
	data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
	title: PropTypes.string.isRequired,
};

export default IngredientCategory;
