import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {

	return (
		<button
			onClick={props.onClick}
			className={[classes.Button, classes[props.type]].join(' ')}
		>
			{props.children}
		</button>
	);
};

export default Button;