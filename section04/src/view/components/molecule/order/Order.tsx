import React, { FC } from "react";
import css from "./Order.module.css";
import { OrderModel } from "../../../../business/model/OrderModel";


const Order: FC<OrderProps> = (props) => {
  return (
    <li className={css.order}>
      <p><b>contect</b>: { JSON.stringify(props.model.contect) }</p>
      <p><b>ingredients</b>: { JSON.stringify(props.model.burger.ingredients) }</p>
      <p><b>price</b>: { props.model.burger.price }$</p>
    </li>
  );
}


interface OrderProps {
  model: OrderModel;
}

export { Order };