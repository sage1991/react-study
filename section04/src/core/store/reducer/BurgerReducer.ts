import { Ingredient } from "../../../business/code/Ingredient";
import { BurgerModel, BurgerModelBuilder } from "../../../business/model/BurgerModel";
import { BurgerAction, BurgerActionType } from "../action/type/BurgerAction";
import { PriceModelBuilder, PriceModel } from "../../../business/model/PriceModel";


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
  
  let ingredients = state.burger.ingredients;
  let priceModel = state.price;
  let ingredient, count;
  
  switch (action.type) {
    case BurgerActionType.ADD_INGREDIENTS :
      return ActionExecutor.addIngredients(state, action);
    case BurgerActionType.REMOVE_INGREDIENTS : 
      return ActionExecutor.removeIngredients(state, action);
    case BurgerActionType.SET_PRICE : 
      const names = Object.keys(ingredients) as (keyof typeof Ingredient)[];
      const priceModal = action.payload as PriceModel;
      const totalPrice = names.map(name => state.burger.ingredients[name as Ingredient] * priceModal[name as Ingredient])
                              .reduce((accumulator, value) => accumulator + value, priceModal.base);
      return {
        price: action.payload,
        burger: new BurgerModelBuilder().ingredients({ ...ingredients })
                                        .price(totalPrice)
                                        .build()
      };
    case BurgerActionType.RESET_INGREDIENTS :
      return {
        ...state,
        burger: new BurgerModelBuilder().price(INITIAL_BURGER.price)
                                        .ingredients({ ...INITIAL_INGREDIENTS })
                                        .build()
      }
    default : 
      return state;
  }
}


class ActionExecutor {

  static addIngredients(state: BurgerState, action: BurgerAction) {
    const { burger, price } = state;
    const { ingredient, count } = action.payload as { ingredient: Ingredient, count: number };
    return {
      ...state,
      burger: new BurgerModelBuilder().ingredients({ 
                                        ...burger.ingredients, 
                                        [ ingredient ]: burger.ingredients[ingredient] + count 
                                      })
                                      .price(state.burger.price + price[ingredient] * count)
                                      .build(),
    };
  }

  static removeIngredients(state: BurgerState, action: BurgerAction) {
    const { burger, price } = state;
    const { ingredient, count } = action.payload as { ingredient: Ingredient, count: number };
    return {
      ...state,
      burger: new BurgerModelBuilder().ingredients({ 
                                        ...burger.ingredients, 
                                        [ ingredient ]: burger.ingredients[ingredient] - count 
                                      })
                                      .price(state.burger.price - price[ingredient] * count)
                                      .build(),
    };
  }

  static setPrice(state: BurgerState, action: BurgerAction) {
    const burger = state.burger;
    const price = action.payload as PriceModel;
    const totalPrice = (Object.keys(burger.ingredients) as Ingredient[])
                              .map(name => state.burger.ingredients[name] * price[name])
                              .reduce((accumulator, value) => accumulator + value, price.base);
    return {
      price: action.payload,
      burger: new BurgerModelBuilder().ingredients({ ...burger.ingredients })
                                      .price(totalPrice)
                                      .build()
    };
  }
}



export { burgerReducer };
export interface BurgerState {
  burger: BurgerModel;
  price: PriceModel;
}