import React from 'react';
import classes from './Modal.module.css';

const Modal = (props) => (
	<div className={classes.Modal}
	     style={{
	     	transform: props.show ? 'translate(-50%, -50%)': 'translateY(-100vh, -50%)',
		     opacity: props.show ? '1': '0'
	     }}
	>
		{props.children}
	</div>
);

export default Modal;