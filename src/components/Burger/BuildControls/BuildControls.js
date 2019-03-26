import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from "./BuildControl/BuildControl";

const controls = [
	{label: 'Meat', type: 'meat'},
	{label: 'Salad', type: 'salad'},
	{label: 'Cheese', type: 'cheese'},
	{label: 'Bacon', type: 'bacon'}
];

const BuildControls = (props) => {

	return (
		<div className={classes.BuildControls}>
			<p>Current Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
			{controls.map((c) => {
				return <BuildControl
					onLess={() => props.onRemoveIngredient(c.type)}
					onMore={() => props.onAddIngredient(c.type)}
					disabled={props.disabled[c.type]}
					key={c.label}
					label={c.label} />
			})}
			<button disabled={!props.purchasable}
			        onClick={props.onPurchase}
			        className={classes.OrderButton}>ORDER NOW</button>
		</div>
	);
};

export default BuildControls;