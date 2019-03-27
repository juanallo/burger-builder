import React, {Fragment, Component} from 'react';
import classes from './Layout.module.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {

	state = {
		showSideDrawer: true
	};

	toggleSideDrawer = () => {
		this.setState(prevState => {
			return {
				showSideDrawer: !prevState.showSideDrawer
			}
		});
	};

	render(){
		return (
			<Fragment>
				<Toolbar onMenuClicked={this.toggleSideDrawer}/>
				<SideDrawer show={this.state.showSideDrawer}
				            onCloseDrawer={this.toggleSideDrawer}/>
				<main className={classes.content}>
					{this.props.children}
				</main>
			</Fragment>
		)
	}
}
export default Layout;