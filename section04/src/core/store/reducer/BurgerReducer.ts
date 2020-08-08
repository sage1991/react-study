import { Ingredient } from "../../../business/code/Ingredient";
import { BurgerModel, BurgerModelBuilder } from "../../../business/model/BurgerModel";
import { BurgerAction, BurgerActionType } from "../action/type/BurgerAction";
import { PriceModelBuilder, PriceModel } from "../../../business/model/PriceModel";
import { BurgerActionExecutor } from "./executor/BurgerActionExecutor";


/**
 * [ initial conditions ]
 * 
 * - INITIAL_INGREDIENTS
 * - INITIAL_BURGER
 * - INITIAL_PRICE
 * - INITIAL_BURGER_STATE
 */
const INITIAL_INGREDIENTS = {
  [ Ingredient.MEAT ]: 0,
  [ Ingredient.BACON ]: 0,
  [ Ingredient.CHEESE ]: 0,
  [ Ingredient.SALAD ]: 0,
}
const INITIAL_BURGER = new BurgerModelBuilder().ingredients(INITIAL_INGREDIENTS)
                                              .price(0)
                                              .build();
const INITIAL_PRICE = new PriceModelBuilder().bacon(0)
                                            .base(0)
                                            .cheese(0)
                                            .meat(0)
                                            .salad(0)
                                            .build();
const INITIAL_BURGER_STATE: BurgerState = { burger: INITIAL_BURGER, price: INITIAL_PRICE };


/**
 * [ reducer ]
 */
const burgerReducer = (state = INITIAL_BURGER_STATE, action: BurgerAction) => {
  switch (action.type) {
    case BurgerActionType.ADD_INGREDIENTS :
      return BurgerActionExecutor.addIngredients(state, action);
    case BurgerActionType.REMOVE_INGREDIENTS : 
      return BurgerActionExecutor.removeIngredients(state, action);
    case BurgerActionType.SET_PRICE : 
      return BurgerActionExecutor.setPrice(state, action);
    case BurgerActionType.RESET_INGREDIENTS :
      return BurgerActionExecutor.resetIngredient(state, INITIAL_BURGER);
    default : 
      return state;
  }
}


export { burgerReducer };
export interface BurgerState {
  burger: BurgerModel;
  price: PriceModel;
}