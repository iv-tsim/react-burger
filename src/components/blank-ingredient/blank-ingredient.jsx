import BlankIngredientStyles from './blank-ingredient.module.scss';
import PropTypes from 'prop-types';

export const BlankIngredient = ({ type, text }) => {
	return (
		<div
			className={`${BlankIngredientStyles.ingredient} ${
				type === 'top'
					? BlankIngredientStyles.ingredient_top
					: type === 'bottom'
					? BlankIngredientStyles.ingredient_bottom
					: BlankIngredientStyles.ingredient_margin
			}`}>
			{text}
		</div>
	);
};

BlankIngredient.propTypes = {
	type: PropTypes.string,
	text: PropTypes.string.isRequired,
};

export default BlankIngredient;
