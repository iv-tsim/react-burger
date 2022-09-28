import headerLinkStyles from './header-link.module.scss';

const HeaderLink = ({ active = false, icon, text }) => {
	const Icon = icon;
	return (
		<a href="/" className={`${headerLinkStyles.link} ${active ? `${headerLinkStyles.link_active}` : ''}`}>
			<Icon type={active ? 'primary' : 'secondary'} />
			<span className={`text text_type_main-default ${headerLinkStyles.link__text}`}>{text}</span>
		</a>
	);
};

export default HeaderLink;
