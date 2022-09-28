import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyles from './burger-constructor.module.scss';
import propTypes from '../../utils/prop-types';

const BurgerConstructor = ({ data }) => {
	return (
		<section className={`${burgerConstructorStyles.wrapper}`}>
			<div className={`${burgerConstructorStyles.main}`}>
				<div className={`${burgerConstructorStyles.bun}`}>
					<ConstructorElement {...data[0]} type="top" text={data[0].name} thumbnail={data[0].image} />
				</div>
				<ul className={`${burgerConstructorStyles.list}`}>
					{data.map((element) => (
						<li key={element._id} className={`${burgerConstructorStyles.item}`}>
							<DragIcon />
							<ConstructorElement {...element} text={element.name} thumbnail={element.image} />
						</li>
					))}
				</ul>
				<div className={`${burgerConstructorStyles.bun}`}>
					<ConstructorElement {...data[0]} type="bottom" text={data[0].name} thumbnail={data[0].image} />
				</div>
			</div>
			<div className={`${burgerConstructorStyles.bottom}`}>
				<div className={`${burgerConstructorStyles.price}`}>
					<div className={`text text_type_digits-medium ${burgerConstructorStyles.number}`}>610</div>
					<CurrencyIcon />
				</div>
				<Button htmlType="button" type="primary" size="large">
					Оформить заказ
				</Button>
			</div>
		</section>
	);
};

BurgerConstructor.propTypes = propTypes;

export default BurgerConstructor;
