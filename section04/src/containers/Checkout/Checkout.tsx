import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Ingredients } from "../BurgerBuilder/BurgerBuilder";
import { RouteComponentProps, Route } from "react-router-dom";
import ContectData from "./ContactData/ContectData";


interface CheckoutProps extends RouteComponentProps {
  
}

interface CheckoutState {
  ingredients: Ingredients;
}


class Checkout extends Component<CheckoutProps, CheckoutState> {

  state: CheckoutState = {
    ingredients : {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
      "bread-bottom": 1,
      "bread-top" : 1
    }
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients:any = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = param[1];
    }
    this.setState({
      ingredients: ingredients
    });
  }


  render() {
    return (
      <div>
        <CheckoutSummary 
          ingredients={this.state.ingredients}
          onCancel={this.checkoutCancelHandler}
          onContinue={this.checkoutContinueHandler} />
          <Route path={`${this.props.match.path}/contact-data`} component={ContectData}/ >
      </div>
    );
  }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  }

}

export default Checkout;