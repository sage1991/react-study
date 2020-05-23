import React, { FC } from "react";
import Burger from "../../Burger/Burger";
import Button, { ButtonType } from "../../../components/UI/Button/Button";
import { Ingredients } from "../../../containers/BurgerBuilder/BurgerBuilder";
import css from "./CheckoutSummary.module.css";


interface CheckoutSummaryProps {
  ingredients: Ingredients;
  onCancel: () => void;
  onContinue: () => void;
}

const CheckoutSummary: FC<CheckoutSummaryProps> = (props) => {
  return (
    <div className={css.CheckoutSummary}>
      <h1>hello!</h1>
      <div style={{width: "100%", height: "300px", margin: "auto"}}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button buttonType={ButtonType.Danger} onClick={props.onCancel}>CANCEL</Button>
      <Button buttonType={ButtonType.Success} onClick={props.onContinue}>CONTINUE</Button>
    </div>
  );
}

export default CheckoutSummary;