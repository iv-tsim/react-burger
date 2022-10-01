import orderDonePath from '../../images/orderDone.svg';
import OrderDetailsStyles from './order-details.module.scss';

const OrderDetails = () => {
	return (
		<div className={OrderDetailsStyles.wrapper}>
			<div className={`text text_type_digits-large ${OrderDetailsStyles.id}`}>034536</div>
			<div className={`text text_type_main-medium ${OrderDetailsStyles.title}`}>идентификатор заказа</div>
			<img src={orderDonePath} alt="успех" className={OrderDetailsStyles.image} />
			<div className={OrderDetailsStyles.text}>
				<p className={`text text_type_main-default ${OrderDetailsStyles.text__elem}`}>Ваш заказ начали готовить</p>
				<p className={`text text_type_main-default ${OrderDetailsStyles.text__elem}`}>Дождитесь готовности на орбитальной станции</p>
			</div>
		</div>
	);
};

export default OrderDetails;
