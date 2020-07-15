import React, { FC, Fragment } from "react";
import css from "./PurchaseSummary.module.css";
import { Callback } from "../../../../../core/types/function/Callback";
import { BurgerModel } from "../../../../../business/model/BurgerModel";
import { Ingredient, toIngredientName } from "../../../../../business/code/Ingredient";
import { PriceModel } from "../../../../../business/model/PriceModel";
import { Button } from "../../../../../core/component/atom/button/Button";


const PurchaseSummary: FC<PurchaseSummaryProps> = (props) => {
  
  const { price, ingredients } = props.burgerModel;
  const names = Object.keys(ingredients) as (keyof typeof Ingredient)[];
  
  const orders = names.map(name => {
    const key = Ingredient[name];
    const ingredientName = toIngredientName(key);
    const count = ingredients[key];
    const pricePerCount = props.priceModel[key];
    return (
      <li key={name}>
        { ingredientName } : { count } ({`${count * pricePerCount}`}$)
      </li>
    );
  })

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients : </p>
      <ul>{ orders }</ul>
      <p><b>Total Price : { price }$</b></p>
      <p>Continue to Checkout?</p>
      <Button onClick={props.close}>CANCLE</Button>
      <Button onClick={props.onConfirm}>CONTINUE</Button>
    </Fragment>
  );
}

interface PurchaseSummaryProps {
  priceModel: PriceModel;
  burgerModel: BurgerModel;
  close: Callback;
  onConfirm: Callback;
}

export { PurchaseSummary };