import React from 'react';
import logo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css'

const Logo = (props) => (
	<img className={classes.Logo} style={{height: props.height}} src={logo} alt=""/>
);

export default Logo;