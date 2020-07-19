import React, { FC } from "react";
import css from "./CheckoutSummary.module.css";
import { Burger } from "../../burger/Burger";
import { BurgerModel } from "../../../../../business/model/BurgerModel";
import { Button } from "../../../../../core/component/atom/button/Button";
import { Callback } from "../../../../../core/types/function/Callback";


const CheckoutSummary: FC<CheckoutSummaryProps> = (props) => {
  return (
    <div className={css.checkoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div className={css.burgerWrap}>
        <Burger model={props.model} />
      </div>
      <Button onClick={props.onCancel}>cancel</Button>
      <Button onClick={props.onContinue}>continue</Button>
    </div>
  );
}

interface CheckoutSummaryProps {
  model: BurgerModel;
  onCancel: Callback;
  onContinue: Callback;
}

export { CheckoutSummary };