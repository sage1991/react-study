import { Action } from "../Action";

enum BurgerActionType {
  ADD_INGREDIENTS = "/BurgerAction/ADD_INGREDIENTS",
  REMOVE_INGREDIENTS = "/BurgerAction/REMOVE_INGREDIENTS",
  SET_PRICE = "/BurgerAction/SET_PRICE",
  GET_PRICE = "/BurgerAction/GET_PRICE",
  RESET_INGREDIENTS = "/BurgerAction/RESET_INGREDIENTS",
}


export type BurgerAction = Action<BurgerActionType>
export { BurgerActionType };