
import React, { FC } from "react";
import css from "./BuildControls.module.css";
import { Callback } from "../../../../../core/types/function/Callback";
import { BurgerModel } from "../../../../../business/model/BurgerModel";
import { PriceModel } from "../../../../../business/model/PriceModel";
import { Ingredient, toIngredientName } from "../../../../../business/code/Ingredient";
import { BuildControl } from "../../../atom/burger/control/BuildControl";


const BuildControls: FC<BuildControlsProps> = (props) => {
  
  const { price, ingredients } = props.burgerModel;
  const names = Object.keys(ingredients) as (keyof typeof Ingredient)[];
  const controls = names.map(name => {
    const ingredient = name as Ingredient;
    return <BuildControl key={name}
                         name={toIngredientName(ingredient)} 
                         add={props.addIngredient.bind(null, ingredient)} 
                         remove={props.removeIngredient.bind(null, ingredient)}
                         addable={ingredients[ingredient] < 3}
                         removable={ingredients[ingredient] > 0} />
  });
  
  return (
    <div className={css.BuildControls}>
      <p>Current Price : <strong>{ price.toFixed(2) }</strong></p>
      { controls }
      <button className={css.OrderButton} 
              disabled={price === props.priceModel.base}
              onClick={props.onPurchase}>
        ORDER NOW!
      </button>
    </div>
  );
}


interface BuildControlsProps {
  addIngredient: Callback;
  removeIngredient: Callback;
  onPurchase: Callback;
  burgerModel: BurgerModel;
  priceModel: PriceModel;
}



export { BuildControls };