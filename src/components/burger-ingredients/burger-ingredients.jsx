import { Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyles from './burger-ingredients.module.scss';
import PropTypes from 'prop-types';

const BurgerIngredients = ({ data }) => {
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
					<section className={`${burgerIngredientsStyles.category}`}>
						<h2 className={`text text_type_main-medium ${burgerIngredientsStyles.category__title}`}>Булки</h2>
						<ul className={`${burgerIngredientsStyles.category__list}`}>
							{
								data.filter(element => element.type === 'bun').map(element => (
									<li className={`${burgerIngredientsStyles.product}`}>
										<Counter count={1} size="default" />
										<img src={element.image} alt="product" className={`${burgerIngredientsStyles.product__img}`} />
										<div className={`${burgerIngredientsStyles.product__price}`}>
											<span className={`text text_type_digits-default ${burgerIngredientsStyles.product__number}`}>{element.price}</span>
											<CurrencyIcon />
										</div>
										<h3 className={`text text_type_main-default ${burgerIngredientsStyles.product__title}`}>{element.name}</h3>
									</li>
								))
							}
						</ul>
					</section>
				</li>
				<li className={`${burgerIngredientsStyles.item}`}>
					<section className={`${burgerIngredientsStyles.category}`}>
						<h2 className={`text text_type_main-medium ${burgerIngredientsStyles.category__title}`}>Соусы</h2>
						<ul className={`${burgerIngredientsStyles.category__list}`}>
							{
								data.filter(element => element.type === 'sauce').map(element => (
									<li className={`${burgerIngredientsStyles.product}`}>
										<Counter count={1} size="default" />
										<img src={element.image} alt="product" className={`${burgerIngredientsStyles.product__img}`} />
										<div className={`${burgerIngredientsStyles.product__price}`}>
											<span className={`text text_type_digits-default ${burgerIngredientsStyles.product__number}`}>{element.price}</span>
											<CurrencyIcon />
										</div>
										<h3 className={`text text_type_main-default ${burgerIngredientsStyles.product__title}`}>{element.name}</h3>
									</li>
								))
							}
						</ul>
					</section>
				</li>
				<li className={`${burgerIngredientsStyles.item}`}>
					<section className={`${burgerIngredientsStyles.category}`}>
						<h2 className={`text text_type_main-medium ${burgerIngredientsStyles.category__title}`}>Начинки</h2>
						<ul className={`${burgerIngredientsStyles.category__list}`}>
							{
								data.filter(element => element.type === 'main').map(element => (
									<li className={`${burgerIngredientsStyles.product}`}>
										<Counter count={1} size="default" />
										<img src={element.image} alt="product" className={`${burgerIngredientsStyles.product__img}`} />
										<div className={`${burgerIngredientsStyles.product__price}`}>
											<span className={`text text_type_digits-default ${burgerIngredientsStyles.product__number}`}>{element.price}</span>
											<CurrencyIcon />
										</div>
										<h3 className={`text text_type_main-default ${burgerIngredientsStyles.product__title}`}>{element.name}</h3>
									</li>
								))
							}
						</ul>
					</section>
				</li>
			</ul>
		</section>
	);
}

BurgerIngredients.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
		_id: PropTypes.string,
		name: PropTypes.string,
		type: PropTypes.string,
		proteins: PropTypes.number,
		fat: PropTypes.number,
		carbohydrates: PropTypes.number,
		calories: PropTypes.number,
		price: PropTypes.number,
		image: PropTypes.string,
		image_mobile: PropTypes.string,
		image_large: PropTypes.string,
		__v: PropTypes.number
	}))
}

export default BurgerIngredients;