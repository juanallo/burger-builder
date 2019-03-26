import React, {Fragment} from 'react';
import classes from './Modal.module.css';
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => (
	<Fragment>
		<Backdrop show={props.show} onClick={props.onModelClosed}/>
		<div className={classes.Modal}
		     style={{
			     transform: props.show ? 'translate(-50%, -50%)': 'translate(-50%, -100vh)',
			     opacity: props.show ? '1': '0'
		     }}
		>
			{props.children}
		</div>
	</Fragment>
);

export default Modal;