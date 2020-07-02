import { Ingredient } from "../../common/code/Ingredient";
import { Burger, BurgerBuilder } from "../../common/model/Burger";
import { Action } from "../action/Action";
import { BurgerAction } from "../action/actionType/BurgerAction";
import { BurgerPayload } from "../action/payload/BurgerPayload";



interface BurgerState {
  burger: Burger;
  price: number;
}


const initialIngredients = {
  [Ingredient.MEAT]: 0,
  [Ingredient.BACON]: 0,
  [Ingredient.CHEESE]: 0,
  [Ingredient.SALAD]: 0,
}


const initialState: BurgerState = {
  burger: new BurgerBuilder().ingredients(initialIngredients).build(),
  price: 4
}


const burgerReducer = (state = initialState, action: Action<BurgerAction>) => {
  
  let ingredients = state.burger.ingredients;
  let { ingredient, count } = action.payload as BurgerPayload;

  switch (action.type) {
    case BurgerAction.ADD_INGREDIENTS :
      return {
        ...state,
        burger: new BurgerBuilder().ingredients({ ...ingredients, [ingredient]: ingredients[ingredient] + count })
                                    .build()
      };
    case BurgerAction.REMOVE_INGREDIENTS : 
      return {
        ...state,
        burger: new BurgerBuilder().ingredients({ ...ingredients, [ingredient]: ingredients[ingredient] - count })
                                    .build()
      };
    default : 
      return state;
  }

}

export { burgerReducer };