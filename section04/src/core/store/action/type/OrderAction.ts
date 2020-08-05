import { Action } from "../Action";


enum OrderActionType {
  GET_ORDERS = "/OrderActionType/GET_ORDERS",
  SET_ORDERS = "/OrderActionType/SET_ORDERS",
  ADD_ORDERS = "/OrderActionType/ADD_ORDERS",
}


export type OrderAction = Action<OrderActionType>;
export { OrderActionType };