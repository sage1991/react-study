import React, { FC } from "react";
import css from "./PurchaseSummary.module.css";
import { Callback } from "../../../../../core/types/function/Callback";
import { BurgerModel } from "../../../../../business/model/BurgerModel";
import { Ingredient, toIngredientName } from "../../../../../business/code/Ingredient";
import { PriceModel } from "../../../../../business/model/PriceModel";
import { Button } from "../../../../../core/component/atom/button/Button";
import { FlexView } from "../../../../../core/component/atom/flex/FlexView";
import { Expand } from "../../../../../core/component/atom/flex/expand/Expand";


const PurchaseSummary: FC<PurchaseSummaryProps> = (props) => {
  
  const { price, ingredients } = props.burgerModel;
  const ingredientsList = Object.keys(ingredients) as Ingredient[];
  
  const orders = ingredientsList.map(ingredient => {
    const ingredientName = toIngredientName(ingredient);
    const count = ingredients[ingredient];
    const pricePerCount = props.priceModel[ingredient];
    if (count) {
      return (
        <li key={ingredient}>
          { ingredientName } : { count } ({`${count * pricePerCount}`}$)
        </li>
      );
    } else {
      return null;
    }
  });

  const onConfirm = () => {
    props.onConfirm();
    if (typeof props.close === "function") {
      props.close();
    }
  }

  return (
    <div className={css.purchaseSummary}>
      <div className={css.contentWrap}>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients : </p>
        <ul className={css.orderList}>{ orders }</ul>
        <p><b>Total Price : { price }$</b></p>
        <p>Continue to Checkout?</p>
      </div>
      <FlexView>
          <Expand ratio={1}>
            <Button className={css.cancel} onClick={props.close}>CANCLE</Button>
          </Expand>
          <Expand ratio={1}>
            <Button className={css.continue} onClick={onConfirm}>CONTINUE</Button>
          </Expand>
      </FlexView>
    </div>
  );
}

interface PurchaseSummaryProps {
  priceModel: PriceModel;
  burgerModel: BurgerModel;
  close?: Callback;
  onConfirm: Callback;
}

export { PurchaseSummary };