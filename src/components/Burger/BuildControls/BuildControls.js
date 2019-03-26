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
			{controls.map((c) => {
				return <BuildControl key={c.label} label={c.label}/>
			})}
		</div>
	);
};

export default BuildControls;