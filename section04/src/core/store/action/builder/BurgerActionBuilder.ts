import { BurgerActionType } from "../type/BurgerAction"
import { Ingredient } from "../../../../business/code/Ingredient"
import { PriceModel, PriceModelBuilder } from "../../../../business/model/PriceModel";
import { Dispatch } from "redux";
import { firebaseClient } from "../../../http/HttpClient";
import { Callback } from "../../../types/function/Callback";
import { OrderModel } from "../../../../business/model/OrderModel";
import { RequestBuilder } from "../../../http/model/Request";


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


  static getPrice = (success: Callback, fail: Callback) => {

    return async (dispatch: Dispatch) => {
      
      try {
        const response = await firebaseClient.get("/price.json", (data) => {
          return new PriceModelBuilder().base(data.base)
                                        .bacon(data.bacon)
                                        .cheese(data.cheese)
                                        .meat(data.meat)
                                        .salad(data.salad)
                                        .build();
        });
  
        if (response.isSuccess) {
          dispatch(BurgerActionBuilder.setPrice(response.data));
          success();
        }

      } catch(e) {
        fail(e);
      }
    }
  }

  static orderBurger = (model: OrderModel, success: Callback, fail: Callback) => {

    return async (dispatch: Dispatch) => {
      try {
        const request = new RequestBuilder<OrderModel>().payload(model).build();
        const response = await firebaseClient.post("/orders.json", request);
        if (response.isSuccess) {
          dispatch(BurgerActionBuilder.resetIngredients());
          success();
        } else {
          fail();
        }
      } catch(e) {
        fail(e);
      }
    }
  }


  static resetIngredients = () => {
    return { type: BurgerActionType.RESET_INGREDIENTS };
  }

}


export { BurgerActionBuilder };