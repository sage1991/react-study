import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Ingredients } from "../BurgerBuilder/BurgerBuilder";
import { RouteComponentProps, Route } from "react-router-dom";
import ContectData from "./ContactData/ContectData";


interface CheckoutProps extends RouteComponentProps {
  
}

interface CheckoutState {
  ingredients: Ingredients;
  totalPrice: number;
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
    },
    totalPrice: 0
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients:any = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === "price") {
        price = +param[1];
      } else {
        ingredients[param[0]] = param[1];
      }
    }
    this.setState({
      ingredients: ingredients,
      totalPrice: price
    });
  }


  render() {
    return (
      <div>
        <CheckoutSummary 
          ingredients={this.state.ingredients}
          onCancel={this.checkoutCancelHandler}
          onContinue={this.checkoutContinueHandler} />
          <Route 
            path={`${this.props.match.path}/contact-data`} 
            render={(props) => {
              return (
                <ContectData 
                  ingredients={this.state.ingredients} 
                  totalPrice={this.state.totalPrice}
                  {...props} />
              );
            }} />
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