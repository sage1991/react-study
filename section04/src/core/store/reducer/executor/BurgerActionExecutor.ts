import { BurgerState } from "../BurgerReducer";
import { BurgerAction } from "../../action/type/BurgerAction";
import { BurgerModelBuilder, BurgerModel } from "../../../../business/model/BurgerModel";
import { Ingredient } from "../../../../business/code/Ingredient";
import { PriceModel } from "../../../../business/model/PriceModel";



class BurgerActionExecutor {

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
      price: price,
      burger: new BurgerModelBuilder().ingredients({ ...burger.ingredients })
                                      .price(totalPrice)
                                      .build()
    };
  }


  static resetIngredient(state: BurgerState, INITIAL_BURGER: BurgerModel) {
    return {
      ...state,
      burger: new BurgerModelBuilder().price(INITIAL_BURGER.price)
                                      .ingredients({ ...INITIAL_BURGER.ingredients })
                                      .build()
    }
  }
}


export { BurgerActionExecutor };