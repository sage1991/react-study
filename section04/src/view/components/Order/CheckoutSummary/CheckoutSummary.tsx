import React, { FC } from "react";
import { Burger } from "../../Burger/Burger";
import Button, { ButtonType } from "../../UI/Button/Button";
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
      <Button buttonType={ButtonType.Danger} onClick={props.onCancel}>CANCEL</Button>
      <Button buttonType={ButtonType.Success} onClick={props.onContinue}>CONTINUE</Button>
    </div>
  );
}

export { CheckoutSummary };