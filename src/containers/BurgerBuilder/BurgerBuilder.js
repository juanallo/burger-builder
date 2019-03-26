import React, {Component, Fragment} from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES  = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
};

class BurgerBuilder extends Component {

	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 4
	};

	_changeIngredientAmount(type, count){
		this.setState((prevState) => {
			const newCount = prevState.ingredients[type] + count >= 0 ? prevState.ingredients[type] + count : 0;
			const newPrice = INGREDIENT_PRICES[type] * count + prevState.totalPrice;

			const newIngredients = {...prevState.ingredients};
			newIngredients[type] = newCount;

			return {
				ingredients: newIngredients,
				totalPrice: newPrice
			};
		});
	}

	handleAddIngredient = (type) => {
		this._changeIngredientAmount(type, 1);
	};

	handleRemoveIngredient = (type) => {
		this._changeIngredientAmount(type, -1);
	};

	render(){

		const disabled = {...this.state.ingredients};

		for(let key in disabled){
			disabled[key] = !disabled[key];
		}

		return (
			<Fragment>
				<Burger ingredients={this.state.ingredients}/>
				<BuildControls onAddIngredient={this.handleAddIngredient}
				               onRemoveIngredient={this.handleRemoveIngredient}
				               disabled={disabled}
				/>
			</Fragment>
		);
	}
}

export default BurgerBuilder;