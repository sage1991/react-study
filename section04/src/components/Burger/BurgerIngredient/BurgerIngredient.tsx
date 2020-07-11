import React, { FC } from "react";
import { Ingredient } from "../../../business/code/Ingredient";
import css from "./BurgerIngredient.module.css";


const BurgerIngredient: FC<BurgerIngredientProps> = (props) => {
  switch (props.type) {
    case Ingredient.MEAT:
      return <div className={css.Meat}></div>;
    case Ingredient.CHEESE:
      return <div className={css.Cheese}></div>;
    case Ingredient.BACON:
      return <div className={css.Bacon}></div>;
    case Ingredient.SALAD:
      return <div className={css.Salad}></div>;
  }
};

interface BurgerIngredientProps {
  type: Ingredient;
}

export { BurgerIngredient };
