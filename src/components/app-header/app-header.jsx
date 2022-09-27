import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import appHeaderStyles from './app-header.module.scss';

const AppHeader = () => {
	return (
		<header className={`${appHeaderStyles.header}`}>
			<div className={`container container_wide ${appHeaderStyles.container}`}>
				<nav className={appHeaderStyles.nav}>
					<a href="/" className={`${appHeaderStyles.link}`}>
						<BurgerIcon />
						<span className={`text text_type_main-default ${appHeaderStyles.link__text}`}>Конструктор</span>
					</a>
					<a href="/" className={`${appHeaderStyles.link}`}>
						<ListIcon />
						<span className={`text text_type_main-default ${appHeaderStyles.link__text}`}>Лента заказов</span>
					</a>
				</nav>
				<a href="/">
					<Logo />
				</a>
				<a href="/" className={`${appHeaderStyles.link}`}>
					<ProfileIcon />
					<span className={`text text_type_main-default ${appHeaderStyles.link__text}`}>Личный кабинет</span>
				</a>
			</div>
		</header>
	)
}

export default AppHeader;