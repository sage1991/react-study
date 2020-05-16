import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import { IngredientType } from "../../components/Burger/BurgerIngredient/BurgerIngredient";
import { autoBind } from "../../core/decorator/AutoBind";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";


const INGREDIENT_PRICE: IngredientPrice = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
  "bread-bottom": 2,
  "bread-top": 2,
};

export type DisabledInfo = Record<IngredientType, boolean>;
export type IngredientPrice = Record<IngredientType, number>;
export type Ingredients = Record<IngredientType, number>;

interface BurgerBuilderState {
  ingredients: Ingredients;
  totalPrice: number;
  purchaseable: boolean;
  purchasing : boolean;
}

export default class BurgerBuilder extends Component<{}, BurgerBuilderState> {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
      "bread-bottom": 1,
      "bread-top": 1,
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing : false
  };

  render() {
    let disabledInfo: any = {};
    const keys = Object.keys(this.state.ingredients) as IngredientType[];
    for (let i = 0; i < keys.length; i++) {
      disabledInfo[keys[i]] = this.state.ingredients[keys[i]] <= 0;
    }
    disabledInfo = disabledInfo as IngredientType;
    return (
      <Fragment>
        <Modal 
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}>
          <OrderSummary 
            totalPrice={this.state.totalPrice}
            ingredients={this.state.ingredients}
            purchaseCanceled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          purchase={this.purchaseHandler}
        />
      </Fragment>
    );
  }  // render

  updatePurchaseState(updatedState: Ingredients) {
    const ingredients = {
      ...updatedState,
    };

    const sum = (Object.keys(ingredients) as IngredientType[])
      .map((key: IngredientType) => {
        if (key !== "bread-bottom" && key !== "bread-top") {
          return ingredients[key];
        } else {
          return 0;
        }
      })
      .reduce((accumulator: number, amount: number) => {
        return accumulator + amount;
      }, 0);
    this.setState({
      purchaseable: sum > 0,
    });
  }

  @autoBind
  addIngredientHandler(type: IngredientType) {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients,
    };
    updateIngredients[type] = updateCount;

    const priceAddition = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const updatePrice = oldPrice + priceAddition;

    this.setState({
      ingredients: updateIngredients,
      totalPrice: updatePrice,
    });
    this.updatePurchaseState(updateIngredients);
  }

  @autoBind
  removeIngredientHandler(type: IngredientType) {
    const oldCount = this.state.ingredients[type];

    if (oldCount === 0) {
      return;
    }

    const updateCount = oldCount - 1;
    const updateIngredients = {
      ...this.state.ingredients,
    };
    updateIngredients[type] = updateCount;

    const priceAddition = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const updatePrice = oldPrice - priceAddition;

    this.setState({
      ingredients: updateIngredients,
      totalPrice: updatePrice,
    });
    this.updatePurchaseState(updateIngredients);
  }

  @autoBind
  purchaseHandler() {
    this.setState({
      purchasing : true
    });
  }

  @autoBind
  purchaseCancelHandler() {
    this.setState({
      purchasing : false
    });
  }

  @autoBind
  purchaseContinueHandler() {
    alert("continue!!");  
  }
}
