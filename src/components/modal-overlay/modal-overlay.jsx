import ModalOverlayStyles from './modal-overlay.module.scss';
import PropTypes from 'prop-types';

const ModalOverlay = ({ onHandleClose }) => {
	return <div className={ModalOverlayStyles.modal__overlay} onClick={onHandleClose}></div>;
};

ModalOverlay.propTypes = {
	onHandleClose: PropTypes.func.isRequired,
};

export default ModalOverlay;
