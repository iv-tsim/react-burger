import AppHeader from './components/app-header/app-header';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import appStyles from './App.module.scss';
import data from './utils/data.json';

const App = () => {
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

export default App;
