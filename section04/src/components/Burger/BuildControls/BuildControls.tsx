import React, { FC, useState } from "react";
import css from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
import { Callback } from "../../../core/common/types/function/Callback";
import { PriceModel } from "../../../core/common/model/PriceModel";
import { BurgerModel } from "../../../core/common/model/BurgerModel";
import { Ingredient, toIngredientName } from "../../../core/common/code/Ingredient";



const BuildControls: FC<BuildControlsProps> = (props:BuildControlsProps) => {
  
  const [ state, setState ] = useState<BuildControlsState>({
    purchaseable: false
  });

  const ingredientNames = Object.keys(props.burger.ingredients) as (keyof typeof Ingredient)[];
  const controlList = ingredientNames.map((name) => {
    return (
      <BuildControl 
        key={name} 
        label={toIngredientName(Ingredient[name])}
        disabled={props.burger.price[Ingredient[name]] === 0}
        added={props.onAddIngredients.bind(null, Ingredient[name])}
        removed={props.onRemoveIngredients.bind(null, Ingredient[name])} />
    );
  });

  return (
    <div className={css.BuildControls}>
      <p>Current Price : <strong>{props.price.total.toFixed(2)}</strong></p>
      {controlList}
      <button 
        className={style.OrderButton} 
        disabled={!props.purchaseable}
        onClick={props.purchase} >
          ORDER NOW
      </button>
    </div>
  );
};


interface BuildControlsProps {
  onAddIngredients: Callback;
  onRemoveIngredients: Callback;
  onPurchase: Callback;
  burger: BurgerModel;
}

interface BuildControlsState {
  purchaseable: boolean;
}

export default BuildControls;
