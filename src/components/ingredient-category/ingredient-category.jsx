import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/ingredientPropTypes';
import ingredientCategoryStyles from './ingredient-category.module.scss';
import IngredientCard from '../ingredient-card/ingredient-card';
import { useDispatch } from 'react-redux';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import { setCurrentIngredient, clearCurrentIngredient } from '../../store/slices/ingredientDetailsSlice';
import { useInView } from 'react-intersection-observer';
import React from 'react';

const IngredientCategory = ({ data, title, slug, setTabs }) => {
	const dispatch = useDispatch();
	const [isModalOpened, setIsModalOpened] = React.useState(false);
	const { ref, inView } = useInView();

	React.useEffect(() => {
		setTabs((prev) => [...prev.map((tab) => (tab.slug === slug ? { ...tab, isInView: inView } : tab))]);
	}, [setTabs, slug, inView]);

	const onModalOpen = (data) => {
		dispatch(setCurrentIngredient(data));
		setIsModalOpened(true);
	};

	const onModalClose = () => {
		dispatch(clearCurrentIngredient());
		setIsModalOpened(false);
	};

	return (
		<>
			<section ref={ref}>
				<h2 className={`text text_type_main-medium ${ingredientCategoryStyles.category__title}`}>{title}</h2>
				<ul className={`${ingredientCategoryStyles.category__list}`}>
					{data.map((card) => (
						<IngredientCard key={card._id} data={card} onModalOpen={onModalOpen} />
					))}
				</ul>
			</section>
			{isModalOpened && (
				<Modal onModalClose={onModalClose} title='Детали ингредиента'>
					<IngredientDetails />
				</Modal>
			)}
		</>
	);
};

IngredientCategory.propTypes = {
	data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
	title: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
	setTabs: PropTypes.func.isRequired,
};

export default IngredientCategory;
