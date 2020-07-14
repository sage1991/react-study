import React, { FC } from "react";
import css from "./BuildControls.module.css";
import { BuildControl } from "./BuildControl/BuildControl";
import { Callback } from "../../../../core/types/function/Callback";
import { BurgerModel } from "../../../../business/model/BurgerModel";
import { Ingredient, toIngredientName } from "../../../../business/code/Ingredient";
import { PriceModel } from "../../../../business/model/PriceModel";



const BuildControls: FC<BuildControlsProps> = (props:BuildControlsProps) => {
  
  const ingredientNames = Object.keys(props.burger.ingredients) as (keyof typeof Ingredient)[];
  const controlList = ingredientNames.map((name) => {
    return (
      <BuildControl 
        key={name} 
        label={toIngredientName(Ingredient[name])}
        disabled={props.burger.ingredients[Ingredient[name]] === 0}
        added={props.onAddIngredients.bind(null, Ingredient[name])}
        removed={props.onRemoveIngredients.bind(null, Ingredient[name])} />
    );
  });

  return (
    <div className={css.BuildControls}>
      <p>
        Current Price : <strong>{props.burger.price.toFixed(2)}</strong>
      </p>
      {controlList}
      <button className={css.OrderButton} disabled={props.price.base === props.burger.price}>
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
  price: PriceModel;
}

export { BuildControls };
