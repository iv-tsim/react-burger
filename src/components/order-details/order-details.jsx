import React from 'react';
import orderDonePath from '../../images/orderDone.svg';
import OrderDetailsStyles from './order-details.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { fetchOrderDetails } from '../../store/slices/orderDetailsSlice';

const OrderDetails = () => {
	const dispatch = useDispatch();

	const status = useSelector((store) => store.order.status);
	const ingredients = useSelector((store) => store.ingredientConstructor.items);
	const orderNumber = useSelector((store) => store.order.data?.order?.number);

	React.useEffect(() => {
		dispatch(fetchOrderDetails([ingredients.bun?.data._id, ...ingredients.ingredients.map((ingredient) => ingredient.data._id)]));
	}, [dispatch, ingredients]);

	return (
		<div className={OrderDetailsStyles.wrapper}>
			{status === 'error' ? (
				<div className={`text text_type_main-medium`}>Ошибка</div>
			) : status === 'loading' ? (
				<div className={`text text_type_main-medium`}>Загрузка...</div>
			) : (
				<>
					<div className={`text text_type_digits-large ${OrderDetailsStyles.id}`}>{orderNumber}</div>
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
