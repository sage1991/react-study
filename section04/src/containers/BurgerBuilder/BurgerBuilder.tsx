import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import { IngredientType } from "../../components/Burger/BurgerIngredient/BurgerIngredient"

import { autoBind } from "../../core/AutoBind";

type IngredientPrice = Record<IngredientType, number>;
const INGREDIENT_PRICE : IngredientPrice= {
  salad : 0.5,
  cheese : 0.4,
  meat : 1.3,
  bacon : 0.7,
  "bread-bottom" : 2,
  "bread-top" : 2
}
type Ingredients = Record<IngredientType, number>;

interface BurgerBuilderState {
  ingredients : Ingredients;
  totalPrice : number;
}

export default class BurgerBuilder extends Component<{}, BurgerBuilderState> {

  state = {
    ingredients : {
      salad : 0,
      bacon : 0,
      cheese : 0,
      meat : 0,
      "bread-bottom" : 1,
      "bread-top" : 1
    },
    totalPrice : 4
  }

  @autoBind
  addIngredientHandler(type:IngredientType) {
    
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients,
    }
    updateIngredients[type] = updateCount;

    const priceAddition = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const updatePrice = oldPrice + priceAddition;

    this.setState({
      ingredients : updateIngredients,
      totalPrice : updatePrice,
    });
  }

  @autoBind
  removeIngredientHandler() {

  }

  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredientAdded={this.addIngredientHandler} />
      </Fragment>
    );
  }
}
