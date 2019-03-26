import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const Burger = (props) => {

	let transformedIngredients = Object.keys(props.ingredients).map(type => {
		return [...Array(props.ingredients[type])].map((_, i) => {
			return <BurgerIngredient key={type + i} type={type}/>
		})}).reduce((arr, el)=> {
			return arr.concat(el);
	}, []);

	if(!transformedIngredients.length) {
		transformedIngredients = <p>Please start adding ingredients!</p>
	}

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type='bread-top'/>
			{transformedIngredients}
			<BurgerIngredient type='bread-bottom'/>
		</div>
	);
};

export default Burger;