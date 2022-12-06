import React from 'react';
import orderDonePath from '../../images/orderDone.svg';
import OrderDetailsStyles from './order-details.module.scss';
import { OrderContext } from '../../utils/context/appContext';

const OrderDetails = () => {
	const { orderData, isError, isLoading } = React.useContext(OrderContext);

	return (
		<div className={OrderDetailsStyles.wrapper}>
			{isError ? (
				<div className={`text text_type_main-medium`}>Ошибка</div>
			) : isLoading ? (
				<div className={`text text_type_main-medium`}>Загрузка...</div>
			) : (
				<>
					<div className={`text text_type_digits-large ${OrderDetailsStyles.id}`}>{orderData.order.number}</div>
					<div className={`text text_type_main-medium ${OrderDetailsStyles.title}`}>идентификатор заказа</div>
					<img src={orderDonePath} alt="успех" className={OrderDetailsStyles.image} />
					<div className={OrderDetailsStyles.text}>
						<p className={`text text_type_main-default ${OrderDetailsStyles.text__elem}`}>Ваш заказ начали готовить</p>
						<p className={`text text_type_main-default ${OrderDetailsStyles.text__elem}`}>Дождитесь готовности на орбитальной станции</p>
					</div>
				</>
			)}
		</div>
	);
};

export default OrderDetails;
