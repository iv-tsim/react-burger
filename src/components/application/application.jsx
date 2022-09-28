import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import appStyles from './application.module.scss';
import data from '../../utils/data.json';

const Application = () => {
	return (
		<>
			<AppHeader />
			<main className={`container ${appStyles.main}`}>
				<BurgerIngredients data={data} />
				<BurgerConstructor data={data} />
			</main>
		</>
	);
};

export default Application;
