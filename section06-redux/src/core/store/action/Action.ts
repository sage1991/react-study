import { Dispatch } from "react";
import { Action } from "redux";

enum CounterAction {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  ADD = "ADD",
  SUBTRACT = "SUBTRACT",
  STORE_RESULT = "STORE_RESULT",
  DELETE_RESULT = "DELETE_RESULT",
}


class ActionCreator {

  static increment = () => {
    return { type: CounterAction.INCREMENT };
  }

  static decrement = () => {
    return { type: CounterAction.DECREMENT };
  }

  static add = () => {
    return { type: CounterAction.ADD, payload: { value: 5 } };
  }

  static subtract = () => {
    return { type: CounterAction.SUBTRACT, payload: { value: 5 } };
  }

  static storeResult = (counter: number) => {
    return { type: CounterAction.STORE_RESULT, payload: { value: counter } };
  }

  static deleteResult = (id: number) => {
    return { type: CounterAction.DELETE_RESULT, payload: { id: id } };
  }

  static asyncStoreResult = (counter: number) => {
    return (dispatch: Dispatch<Action>) => {
      setTimeout(() => {
        dispatch(ActionCreator.storeResult(counter));
      }, (2000));
    }
  }
}



export { CounterAction, ActionCreator };