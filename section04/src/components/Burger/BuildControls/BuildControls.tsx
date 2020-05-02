import React, { FC } from "react";
import BuildControl from "./BuildControl/BuildControl";
import { IngredientType } from "../BurgerIngredient/BurgerIngredient";
const style = require("./BuildControls.css");


const controls: { label: string; type: IngredientType }[] = [
  {
    label: "Salad",
    type: IngredientType.Salad,
  },
  {
    label: "Meat",
    type: IngredientType.Meat,
  },
  {
    label: "Cheese",
    type: IngredientType.Cheese,
  },
  {
    label: "Bacon",
    type: IngredientType.Bacon,
  },
];


interface BuildControlsProps {
  ingredientAdded : (type:IngredientType) => void;
}

const BuildControls: FC<BuildControlsProps> = (props:BuildControlsProps) => {
  return (
    <div className={style.BuildControls}>
      {controls.map((control) => (
        <BuildControl
          key={control.label}
          label={control.label}
          type={control.type}
          added={props.ingredientAdded}
        />
      ))}
    </div>
  );
};

export default BuildControls;
