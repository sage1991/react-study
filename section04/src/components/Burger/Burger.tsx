import React, { FC, ReactElement } from "react";
import BurgerIngredient, { IngredientType } from "./BurgerIngredient/BurgerIngredient";
import { ingredientsTypeMapper } from "../../core/converter/IngredientTypeConverter";
import { Ingredients } from "../../containers/BurgerBuilder/BurgerBuilder";

const style = require("./Burger.css");

interface BurgerProps {
  ingredients: Ingredients
}


const Burger: FC<BurgerProps> = (props: BurgerProps) => {
  
  const ingredientsList = (Object.keys(props.ingredients) as IngredientType[])
    .filter((key:IngredientType) => {
      return key !== IngredientType.BreadTop && key !== IngredientType.BreadBottom;
    })
    .map((key: IngredientType, index: number): [string, number] => {
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
