import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from "./BuildControl/BuildControl";

const BuildControls = (props) => {

	return (
		<div className={classes.BuildControls}>
			<BuildControl label={'test'}/>
		</div>
	);
};

export default BuildControls;