import { OrderModel } from "../../../business/model/OrderModel";
import { OrderAction, OrderActionType } from "../action/type/OrderAction";


const INITIAL_ORDER_STATE: OrderState = { orders: [] };


const orderReducer = (state = INITIAL_ORDER_STATE, action: OrderAction) => {

  switch (action.type) {
    case OrderActionType.SET_ORDERS : 
      return { ...state, orders: action.payload };
    case OrderActionType.ADD_ORDERS : 
      return { ...state, orders: [ ...state.orders, action.payload ] };
    default :
      return state;
  }

}


export { orderReducer };
export interface OrderState {
  orders: OrderModel[];
}