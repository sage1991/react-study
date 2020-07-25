import { CounterActionType } from "../action/ActionType";



export interface CounterAction<T = CounterActionType, P = any | null | undefined> {
  type: T,
  payload: P
};