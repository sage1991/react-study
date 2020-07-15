import React, { FC, ReactNode } from "react";
import css from "./Burger.module.css";
import { BurgerModel } from "../../../../business/model/BurgerModel";
import { BurgerBread } from "../../atom/burger/bread/BurgerBread";
import { BreadType } from "../../../../business/code/BreadType";
import { Ingredient } from "../../../../business/code/Ingredient";
import { BurgerIngredient } from "../../atom/burger/ingredient/BurgerIngredient";

const Burger: FC<BurgerProps> = (props) => {

  const { ingredients } = props.model;
  const names = Object.keys(ingredients) as (keyof typeof Ingredient)[];
  const burgerIngredients = names.map(name => { return { type: name as Ingredient, amount: ingredients[name as Ingredient] } })
                                  .reduce<ReactNode[]>((acc, info) => {
                                    for (let i = 0; i < info.amount; i++) acc.push(<BurgerIngredient key={`${info.type}${i}`} type={info.type} />);
                                    return acc;
                                  }, []);
  return (
    <div className={css.burger}>
      <BurgerBread type={BreadType.TOP} />
      { burgerIngredients.length ? burgerIngredients : <p>please add ingredients!</p> }
      <BurgerBread type={BreadType.BOTTOM} />
    </div>
  );
}


interface BurgerProps {
  model: BurgerModel;
}


export { Burger };