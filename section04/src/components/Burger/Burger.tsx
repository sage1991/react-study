import React, { FC, ReactElement } from "react";
import BurgerIngredient, { IngredientType } from "./BurgerIngredient/BurgerIngredient";
import { ingredientsTypeMapper } from "../../core/converter/IngredientTypeConverter";

const style = require("./Burger.css");

interface BurgerProps {
  ingredients: {
    [name: string]: number;
  };
}

const Burger: FC<BurgerProps> = (props: BurgerProps) => {
  
  const ingredientsList = Object.keys(props.ingredients)
    .filter((key:string) => {
      return key !== IngredientType.BreadTop && key !== IngredientType.BreadBottom;
    })
    .map((key: string, index: number): [string, number] => {
      return [key, props.ingredients[key]];
    })
    .reduce(
      (
        accumulator: ReactElement[],
        element: [string, number]
      ): ReactElement[] => {
        let _accumulator = [...accumulator];
        const type = ingredientsTypeMapper(element[0]);
        for (let i = 0; i < element[1]; i++) {
          _accumulator.push(<BurgerIngredient key={type + i} type={type} />);
        }
        return _accumulator;
      },
      []
    );
  
  if(ingredientsList.length === 0) {
    ingredientsList.push(<p key="no-item">Please start adding ingredients!</p>);
  }
  
  return (
    <div className={style.Burger}>
      <BurgerIngredient type={IngredientType.BreadTop} />
      {ingredientsList}
      <BurgerIngredient type={IngredientType.BreadBottom} />
    </div>
  );
};

export default Burger;
