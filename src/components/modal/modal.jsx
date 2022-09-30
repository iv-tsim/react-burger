import ModalStyles from './modal.module.scss';
import ModalOverlay from '../modal-overlay/modal-overlay';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import React from 'react';

const modalRoot = document.getElementById('modals');

const Modal = ({ onModalClose, children, title = '' }) => {
	const handleClose = React.useCallback(() => {
		onModalClose();
	}, [onModalClose]);

	const onEscapePress = React.useCallback(
		(e) => {
			if (e.key === 'Escape') {
				handleClose();
			}
		},
		[handleClose],
	);

	React.useEffect(() => {
		document.addEventListener('keydown', onEscapePress);

		return () => {
			document.removeEventListener('keydown', onEscapePress);
		};
	}, [onEscapePress]);

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
	onModalClose: PropTypes.func.isRequired,
	children: PropTypes.node,
	title: PropTypes.string,
};

export default Modal;
