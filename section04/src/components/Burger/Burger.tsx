import React, { FC, ReactNode } from "react";
import css from "./Burger.module.css";
import { BurgerModel } from "../../business/model/BurgerModel";
import { BurgerBread } from "./BurgerBread/BurgerBread";
import { BreadType } from "../../business/code/BreadType";
import { Ingredient } from "../../business/code/Ingredient";
import { BurgerIngredient } from "./BurgerIngredient/BurgerIngredient";



const Burger: FC<BurgerProps> = (props: BurgerProps) => {
  
  const ingredientNames = Object.keys(props.burger.ingredients) as (keyof typeof Ingredient)[];
  const ingredients = ingredientNames.map((name) => {
                                        return {
                                          type: Ingredient[name],
                                          amount: props.burger.ingredients[Ingredient[name]]
                                        }
                                      }).reduce<ReactNode[]>((accumulator, ingredientInfo) => {
                                        for (let i = 0; i < ingredientInfo.amount; i++) {
                                          accumulator.push(<BurgerIngredient type={ingredientInfo.type} />)
                                        }
                                        return accumulator;
                                      }, []);
  
  return (
    <div className={css.Burger}>
      <BurgerBread type={BreadType.TOP} />
      { ingredients.length ? ingredients : <p>Please add ingredients!</p> }
      <BurgerBread type={BreadType.BOTTOM} />
    </div>
  );
};


interface BurgerProps {
  burger: BurgerModel;
}

export { Burger };
