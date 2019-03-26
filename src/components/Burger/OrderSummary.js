import React, {Fragment} from 'react';
import Button from "../common/Button/Button";

const OrderSummary = (props) => {

	const ingredientSummary = Object.keys(props.ingredients)
		.map(key => {
			return <li key={key}>
				<span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
				</li>
		});

	return (
		<Fragment>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>
				{ingredientSummary}
			</ul>
			<p>Continue to Checkout?</p>
			<Button type='Danger' onClick={props.onCancel}>CANCEL</Button>
			<Button type='Success' onClick={props.onCheckout}>CONTINUE</Button>
		</Fragment>
	)
};

export default OrderSummary;