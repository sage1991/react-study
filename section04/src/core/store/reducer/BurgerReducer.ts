import { Ingredient } from "../../../business/code/Ingredient";
import { BurgerModel, BurgerModelBuilder } from "../../../business/model/BurgerModel";
import { Action } from "../action/Action";
import { BurgerAction } from "../action/actionType/BurgerAction";
import { PriceModelBuilder, PriceModel } from "../../../business/model/PriceModel";



const initialIngredients = {
  [ Ingredient.MEAT ]: 0,
  [ Ingredient.BACON ]: 0,
  [ Ingredient.CHEESE ]: 0,
  [ Ingredient.SALAD ]: 0,
}
const initialBurger = new BurgerModelBuilder().ingredients(initialIngredients).price(0).build();
const initialPrice = new PriceModelBuilder().bacon(0)
                                            .base(0)
                                            .cheese(0)
                                            .meat(0)
                                            .salad(0)
                                            .build();
const initialState: BurgerState = { burger: initialBurger, price: initialPrice };




const burgerReducer = (state = initialState, action: Action<BurgerAction>) => {
  
  let ingredients = state.burger.ingredients;
  let priceModel = state.price;
  let ingredient, count;
  
  switch (action.type) {
    case BurgerAction.ADD_INGREDIENTS :
      ingredient = action.payload.ingredient as Ingredient;
      count = action.payload.count as number;
      return {
        ...state,
        burger: new BurgerModelBuilder().ingredients({ ...ingredients, [ingredient]: ingredients[ingredient] + count })
                                        .price(state.burger.price + priceModel[ingredient] * count)
                                        .build()
      };
    case BurgerAction.REMOVE_INGREDIENTS : 
      ingredient = action.payload.ingredient as Ingredient;
      count = action.payload.count as number;
      return {
        ...state,
        burger: new BurgerModelBuilder().ingredients({ ...ingredients, [ingredient]: ingredients[ingredient] - count })
                                        .price(state.burger.price - priceModel[ingredient] * count)
                                        .build()
      };
    case BurgerAction.SET_PRICE : 
      const ingredientNames = Object.keys(ingredients) as (keyof typeof Ingredient)[];
      const totalPrice = ingredientNames.map((name) => state.burger.ingredients[Ingredient[name]] * action.payload[Ingredient[name]])
                                        .reduce((accumulator, value) => accumulator + value, 0);
      return {
        price: action.payload,
        burger: new BurgerModelBuilder().ingredients({ ...ingredients })
                                        .price(totalPrice)
                                        .build()
      };
    default : 
      return state;
  }

}


export { burgerReducer };
export interface BurgerState {
  burger: BurgerModel;
  price: PriceModel;
}