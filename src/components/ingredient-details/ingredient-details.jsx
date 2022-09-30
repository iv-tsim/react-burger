import PropTypes from 'prop-types';
import IngredientDetailsStyles from './ingredient-details.module.scss';

const IngredientDetails = ({ image_large, name, calories, carbohydrates, fat, proteins }) => {
	return (
		<div className={IngredientDetailsStyles.wrapper}>
			<div className={IngredientDetailsStyles.top}>
				<img src={image_large} alt={name} className={IngredientDetailsStyles.image} />
				<div className={`text text_type_main-medium ${IngredientDetailsStyles.title}`}>{name}</div>
			</div>
			<ul className={IngredientDetailsStyles.list}>
				<li className={IngredientDetailsStyles.item}>
					<div className={`text text_type_main-default text_color_inactive ${IngredientDetailsStyles.item__name}`}>Калории,ккал</div>
					<div className={`text text_type_digits-default text_color_inactive ${IngredientDetailsStyles.item__value}`}>{calories}</div>
				</li>
				<li className={IngredientDetailsStyles.item}>
					<div className={`text text_type_main-default text_color_inactive ${IngredientDetailsStyles.item__name}`}>Белки, г</div>
					<div className={`text text_type_digits-default text_color_inactive ${IngredientDetailsStyles.item__value}`}>{proteins}</div>
				</li>
				<li className={IngredientDetailsStyles.item}>
					<div className={`text text_type_main-default text_color_inactive ${IngredientDetailsStyles.item__name}`}>Жиры, г</div>
					<div className={`text text_type_digits-default text_color_inactive ${IngredientDetailsStyles.item__value}`}>{fat}</div>
				</li>
				<li className={IngredientDetailsStyles.item}>
					<div className={`text text_type_main-default text_color_inactive ${IngredientDetailsStyles.item__name}`}>Углеводы, г</div>
					<div className={`text text_type_digits-default text_color_inactive ${IngredientDetailsStyles.item__value}`}>{carbohydrates}</div>
				</li>
			</ul>
		</div>
	);
};

IngredientDetails.propTypes = {
	image_large: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	calories: PropTypes.number.isRequired,
	carbohydrates: PropTypes.number.isRequired,
	fat: PropTypes.number.isRequired,
	proteins: PropTypes.number.isRequired,
};

export default IngredientDetails;
