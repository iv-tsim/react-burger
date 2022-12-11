import IngredientDetailsStyles from './ingredient-details.module.scss';
import { useSelector } from 'react-redux';

const IngredientDetails = () => {
	const data = useSelector((state) => state.ingredientDetails.data);

	return (
		<div className={IngredientDetailsStyles.wrapper}>
			<div className={IngredientDetailsStyles.top}>
				<img src={data.image_large} alt={data.name} className={IngredientDetailsStyles.image} />
				<div className={`text text_type_main-medium ${IngredientDetailsStyles.title}`}>{data.name}</div>
			</div>
			<ul className={IngredientDetailsStyles.list}>
				<li className={IngredientDetailsStyles.item}>
					<div className={`text text_type_main-default text_color_inactive ${IngredientDetailsStyles.item__name}`}>Калории,ккал</div>
					<div className={`text text_type_digits-default text_color_inactive ${IngredientDetailsStyles.item__value}`}>{data.calories}</div>
				</li>
				<li className={IngredientDetailsStyles.item}>
					<div className={`text text_type_main-default text_color_inactive ${IngredientDetailsStyles.item__name}`}>Белки, г</div>
					<div className={`text text_type_digits-default text_color_inactive ${IngredientDetailsStyles.item__value}`}>{data.proteins}</div>
				</li>
				<li className={IngredientDetailsStyles.item}>
					<div className={`text text_type_main-default text_color_inactive ${IngredientDetailsStyles.item__name}`}>Жиры, г</div>
					<div className={`text text_type_digits-default text_color_inactive ${IngredientDetailsStyles.item__value}`}>{data.fat}</div>
				</li>
				<li className={IngredientDetailsStyles.item}>
					<div className={`text text_type_main-default text_color_inactive ${IngredientDetailsStyles.item__name}`}>Углеводы, г</div>
					<div className={`text text_type_digits-default text_color_inactive ${IngredientDetailsStyles.item__value}`}>{data.carbohydrates}</div>
				</li>
			</ul>
		</div>
	);
};

export default IngredientDetails;
