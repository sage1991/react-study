import React, { FC } from "react";
import BuildControl from "./BuildControl/BuildControl";
import { IngredientType } from "../BurgerIngredient/BurgerIngredient";
import { DisabledInfo } from "../../../containers/BurgerBuilder/BurgerBuilder"
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
  ingredientRemoved : (type:IngredientType) => void;
  purchase : () => void;
  disabled : DisabledInfo;
  price : number;
  purchaseable : boolean;
}

const BuildControls: FC<BuildControlsProps> = (props:BuildControlsProps) => {
  return (
    <div className={style.BuildControls}>
      <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map((control) => (
        <BuildControl
          key={control.label}
          label={control.label}
          type={control.type}
          disabled={props.disabled[control.type]}
          added={props.ingredientAdded}
          removed={props.ingredientRemoved}
        />
      ))}
      <button 
        className={style.OrderButton} 
        disabled={!props.purchaseable}
        onClick={props.purchase} >
          ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
