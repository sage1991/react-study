import React, { FC } from "react";
import css from "./BurgerIngredient.module.css";
import { Ingredient } from "../../../../../business/code/Ingredient";


const BurgerIngredient: FC<BurgerIngredientProps> = (props) => {
  switch (props.type) {
    case Ingredient.MEAT:
      return <div className={css.meat}></div>;
    case Ingredient.CHEESE:
      return <div className={css.cheese}></div>;
    case Ingredient.BACON:
      return <div className={css.bacon}></div>;
    case Ingredient.SALAD:
      return <div className={css.salad}></div>;
  }
}

interface BurgerIngredientProps {
  type: Ingredient;
}

export { BurgerIngredient };