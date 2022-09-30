import ModalStyles from './modal.module.scss';
import ModalOverlay from '../modal-overlay/modal-overlay';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modals');

const Modal = ({ setIsOpened, children, title = '' }) => {
	const handleClose = () => {
		setIsOpened(false);
	};

	return ReactDOM.createPortal(
		<div className={ModalStyles.modal__wrapper}>
			<ModalOverlay onHandleClose={handleClose}></ModalOverlay>
			<div className={ModalStyles.modal}>
				<div className={ModalStyles.modal__top}>
					<div className={`text text_type_main-large ${ModalStyles.modal__title}`}>{title}</div>
					<div className={ModalStyles.modal__close} onClick={handleClose}>
						<CloseIcon />
					</div>
				</div>
				{children}
			</div>
		</div>,
		modalRoot,
	);
};

Modal.propTypes = {
	setIsOpened: PropTypes.func.isRequired,
	children: PropTypes.node,
	title: PropTypes.string,
};

export default Modal;
