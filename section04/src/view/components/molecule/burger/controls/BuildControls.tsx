import React, { FC } from "react";
import css from "./BuildControls.module.css";
import { BuildControl } from "../../../atom/burger/control/BuildControl";
import { toIngredientName, Ingredient } from "../../../../../business/code/Ingredient";
import { Button } from "../../../../../core/component/atom/button/Button";
import { Callback } from "../../../../../core/types/function/Callback";
import { BurgerModel } from "../../../../../business/model/BurgerModel";
import { PriceModel } from "../../../../../business/model/PriceModel";
import { dispatch } from "../../../../../core/store/Store";
import { ModalPayload } from "../../../../../core/store/action/payload/UIPayload";
import { PurchaseSummaryWithStore } from "../../../../containers/burger/PurchaseSummaryWithStore";
import { UIAction } from "../../../../../core/store/action/actionType/UIAction";


const BuildControls: FC<BuildControlsProps> = (props:BuildControlsProps) => {
  
  const { burgerModel, priceModel } = props;
  const ingredients = Object.keys(burgerModel.ingredients) as Ingredient[];
  const controlList = ingredients.map((ingredient) => {
    return (
      <BuildControl key={ingredient} 
                    label={toIngredientName(ingredient)}
                    addable={burgerModel.ingredients[ingredient] < 3}
                    removable={burgerModel.ingredients[ingredient] > 0}
                    add={props.addIngredient.bind(null, ingredient)}
                    remove={props.removeIngredient.bind(null, ingredient)} />
    );
  });

  const onPurchase = () => {
    const payload: ModalPayload = <PurchaseSummaryWithStore />;
    dispatch({ type: UIAction.SHOW_MODAL, payload: payload });
  }

  return (
    <div className={css.buildControls}>
      <p>Current Price : <strong>{ burgerModel.price.toFixed(2) }</strong></p>
      { controlList }
      <Button className={css.orderButton} 
              disabled={priceModel.base === burgerModel.price}
              onClick={onPurchase}>
        Order Now!
      </Button>
    </div>
  );
};


interface BuildControlsProps {
  addIngredient: Callback;
  removeIngredient: Callback;
  burgerModel: BurgerModel;
  priceModel: PriceModel;
}

export { BuildControls };
