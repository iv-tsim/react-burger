import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import appHeaderStyles from './app-header.module.scss';
import HeaderLink from '../header-link/header-link';

const AppHeader = () => {
	return (
		<header className={`${appHeaderStyles.header}`}>
			<nav className={`container container_wide ${appHeaderStyles.nav}`}>
				<ul className={`${appHeaderStyles.menu}`}>
					<li>
						<HeaderLink active={true} icon={BurgerIcon} text="Конструктор" />
					</li>
					<li>
						<HeaderLink icon={ListIcon} text="Лента заказов" />
					</li>
				</ul>
				<a href="/">
					<Logo />
				</a>
				<HeaderLink icon={ProfileIcon} text="Личный кабинет" />
			</nav>
		</header>
	);
};

export default AppHeader;
