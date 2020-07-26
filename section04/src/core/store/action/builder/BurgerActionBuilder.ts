import { BurgerActionType } from "../type/BurgerAction"
import { Ingredient } from "../../../../business/code/Ingredient"
import { PriceModel, PriceModelBuilder } from "../../../../business/model/PriceModel";
import { Dispatch } from "redux";
import { firebaseClient } from "../../../http/HttpClient";


class BurgerActionBuilder {

  static addIngredients = (ingredient: Ingredient, count: number) => {
    return { type: BurgerActionType.ADD_INGREDIENTS, payload: { ingredient: ingredient, count: count } };
  }

  static removeIngredients = (ingredient: Ingredient, count: number) => {
    return { type: BurgerActionType.REMOVE_INGREDIENTS, payload: { ingredient: ingredient, count: count } };
  }

  static setPrice = (price: PriceModel) => {
    return { type: BurgerActionType.SET_PRICE, payload: price };
  }

  static getPrice = () => {
    return async (dispatch: Dispatch) => {
      const response = await firebaseClient.get("/price.json", (data) => {
        return new PriceModelBuilder().base(data.base)
                                      .bacon(data.bacon)
                                      .cheese(data.cheese)
                                      .meat(data.meat)
                                      .salad(data.salad)
                                      .build();
      });
      if (response.isSuccess) dispatch(BurgerActionBuilder.setPrice(response.data));
    }
  }

}


export { BurgerActionBuilder };