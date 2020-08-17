import { Callback } from "../../../types/function/Callback"
import { Dispatch } from "redux"
import { firebaseClient } from "../../../http/HttpClient";
import { ContectModelBuilder } from "../../../../business/model/ContectModel";
import { BurgerModelBuilder } from "../../../../business/model/BurgerModel";
import { OrderModelBuilder, OrderModel } from "../../../../business/model/OrderModel";
import { OrderActionType } from "../type/OrderAction";
import { Provider } from "../../../types/function/Provider";
import { StoreState } from "../../Store";


class OrderActionBuilder {

  static addOrders = (order: OrderModel) => ({ type: OrderActionType.ADD_ORDERS, payload: order });
  static setOrders = (orders: OrderModel[]) => ({ type: OrderActionType.SET_ORDERS, payload: orders });

  static getOrders = (success: Callback, fail: Callback) => async (dispatch: Dispatch, getState: Provider<StoreState>) => {
    try {
      const auth = getState().sign.auth;
      if (!auth.token) throw new Error("UnAuthorized");

      const response = await firebaseClient.get(`/orders.json?auth=${auth.token}&orderBy="userId"&equalTo="${auth.id}"`, data => {
        if (!data) return [];
        return Object.keys(data).map(key => {
          return OrderActionBuilder.convertToOrder(key, data[key]);
        });
      });

      if (response.isSuccess) {
        dispatch(OrderActionBuilder.setOrders(response.data));
        success();
      } else {
        fail();
      }
    } catch(e) {
      fail(e);
    }
  }


  private static convertToOrder = (id: string, orderData: any) => {
    const contectModel = new ContectModelBuilder().fromJson(orderData.contect)
                                                  .build();
    const burgerModel = new BurgerModelBuilder().ingredients(orderData.burger.ingredients)
                                                .price(orderData.burger.price)
                                                .build();
    return new OrderModelBuilder().burger(burgerModel)
                                  .contect(contectModel)
                                  .id(id)
                                  .build();
  }

}


export { OrderActionBuilder }