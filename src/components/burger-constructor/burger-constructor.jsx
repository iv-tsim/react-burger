import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyles from './burger-constructor.module.scss';
import PropTypes from 'prop-types';

const BurgerConstructor = ({ data }) => {
	return (
		<section className={`${burgerConstructorStyles.wrapper}`}>
			<div className={`${burgerConstructorStyles.main}`}>
				<div className={`${burgerConstructorStyles.bun}`}>
					<ConstructorElement {...data[0]} type='top' text={data[0].image.name} thumbnail={data[0].image} />
				</div>
				<ul className={`${burgerConstructorStyles.list}`}>
					{
						data.map(element => (
							<li className={`${burgerConstructorStyles.item}`}>
								<DragIcon />
								<ConstructorElement {...element} text={element.name} thumbnail={element.image} />
							</li>
						))
					}
				</ul>
				<div className={`${burgerConstructorStyles.bun}`}>
					<ConstructorElement {...data[0]} type='bottom' text={data[0].image.name} thumbnail={data[0].image} />
				</div>
			</div>
			<div className={`${burgerConstructorStyles.bottom}`}>
				<div className={`${burgerConstructorStyles.price}`}>
					<div className={`text text_type_digits-medium ${burgerConstructorStyles.number}`}>610</div>
					<CurrencyIcon />
				</div>
				<Button type="primary" size="large">Оформить заказ</Button>
			</div>
		</section>
	);
}

BurgerConstructor.propTypes = {
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

export default BurgerConstructor;