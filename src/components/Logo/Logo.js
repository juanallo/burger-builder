import React from 'react';
import logo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css'

const Logo = () => (
	<img className={classes.Logo} src={logo} alt=""/>
);

export default Logo;