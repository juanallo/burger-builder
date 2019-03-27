import React, {Fragment, Component} from 'react';
import classes from './Layout.module.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {

	state = {
		showSideDrawer: true
	};

	handleSideDrawerClose = () => {
		this.setState({
			showSideDrawer: false
		});
	};

	render(){
		return (
			<Fragment>
				<Toolbar />
				<SideDrawer show={this.state.showSideDrawer}
				            onCloseDrawer={this.handleSideDrawerClose}/>
				<main className={classes.content}>
					{this.props.children}
				</main>
			</Fragment>
		)
	}
}
export default Layout;