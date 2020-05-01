import React, { FC, ReactElement } from "react";
import BurgerIngredient, {
  IngredientType,
} from "./BurgerIngredient/BurgerIngredient";

const style = require("./Burger.css");

interface BurgerProps {
  ingredients: {
    [name: string]: number;
  };
}

const ingredientsTypeMapper = (key: string): IngredientType => {
  switch (key) {
    case "salad":
      return IngredientType.Salad;
    case "bacon":
      return IngredientType.Bacon;
    case "cheese":
      return IngredientType.Cheese;
    case "meat":
      return IngredientType.Meat;
    case "bread-top":
      return IngredientType.BreadTop;
    case "bread-bottom":
      return IngredientType.BreadBottom;
    default:
      throw new Error("unKnown Ingredient type.");
  }
};

const Burger: FC<BurgerProps> = (props: BurgerProps) => {
  const ingredientsList = Object.keys(props.ingredients)
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
    ingredientsList.push(<p>Please start adding ingredients!</p>);
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
