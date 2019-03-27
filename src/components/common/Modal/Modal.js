import React, {Fragment, Component} from 'react';
import classes from './Modal.module.css';
import Backdrop from "../Backdrop/Backdrop";


class Modal extends Component {

	shouldComponentUpdate(nextProps){
		return nextProps.show !== this.props.show;
	}

	render(){
		return (
			<Fragment>
				<Backdrop show={this.props.show} onClick={this.props.onModelClosed}/>
				<div className={classes.Modal}
				     style={{
					     transform: this.props.show ? 'translate(-50%, -50%)' : 'translate(-50%, -200vh)',
				     opacity: this.props.show ? '1': '0'
			     }}
				>
					{this.props.children}
				</div>
			</Fragment>
		)
	}
}
export default Modal;