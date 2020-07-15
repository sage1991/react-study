import React, { FC } from "react";
import { Burger } from "../../Burger/Burger";
import css from "./CheckoutSummary.module.css";
import { BurgerModel } from "../../../../business/model/BurgerModel";


interface CheckoutSummaryProps {
  burger: BurgerModel;
  onCancel: () => void;
  onContinue: () => void;
}

const CheckoutSummary: FC<CheckoutSummaryProps> = (props) => {
  return (
    <div className={css.CheckoutSummary}>
      <h1>hello!</h1>
      <div style={{width: "100%", height: "300px", margin: "auto"}}>
        <Burger burger={props.burger} />
      </div>
    </div>
  );
}

export { CheckoutSummary };