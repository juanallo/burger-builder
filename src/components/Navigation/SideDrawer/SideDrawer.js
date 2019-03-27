import React, {Fragment} from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from './SideDrawer.module.css'
import Backdrop from "../../common/Backdrop/Backdrop";

const SideDrawer = (props) => {

	const sideDrawerClasses = [classes.SideDrawer];

	if(props.show){
		sideDrawerClasses.push(classes.Open);
	}
	else {
		sideDrawerClasses.push(classes.Closed);
	}

	return (
		<Fragment>
			<Backdrop show={props.show} onClick={props.onCloseDrawer}/>
			<div className={sideDrawerClasses.join(' ')}>
				<Logo height='11%'/>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Fragment>
	);
};

export default SideDrawer;