import React, { FC } from "react";
import { IngredientType } from "../../BurgerIngredient/BurgerIngredient";
const style = require("./BuildControl.css");

interface BuildControlProps {
  label : string;
  type : IngredientType;
  disabled : boolean
  added : (type:IngredientType) => void;
  removed : (type:IngredientType) => void;
}

const BuildControl:FC<BuildControlProps> = (props:BuildControlProps) => {
  return (
    <div className={style.BuildControl}>
      <div className={style.Label}>{props.label}</div>
      <button className={style.Less} onClick={props.removed.bind(null, props.type)} disabled={props.disabled}>less</button>
      <button className={style.More} onClick={props.added.bind(null, props.type)}>more</button>
    </div>
  );
};

export default BuildControl;