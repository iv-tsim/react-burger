import headerLinkStyles from './header-link.module.scss';
import PropTypes from 'prop-types';

const HeaderLink = ({ active = false, icon, text }) => {
	const Icon = icon;
	return (
		<a href="#void" className={`${headerLinkStyles.link} ${active ? `${headerLinkStyles.link_active}` : ''}`}>
			<Icon type={active ? 'primary' : 'secondary'} />
			<span className={`text text_type_main-default ${headerLinkStyles.link__text}`}>{text}</span>
		</a>
	);
};

HeaderLink.propTypes = {
	active: PropTypes.bool,
	icon: PropTypes.elementType.isRequired,
	text: PropTypes.string.isRequired
}

export default HeaderLink;
