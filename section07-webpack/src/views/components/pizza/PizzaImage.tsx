import React, { FC } from "react";
import pizzaImage from "../../../assets/pizza.jpg";
import css from "./PizzaImage.module.css";


const PizzaImage: FC = (props) => {
  return (
    <div className={css.pizzaImageWrap}>
      <img className={css.pizzaImage} src={pizzaImage} />
    </div>
  );
}

export { PizzaImage };