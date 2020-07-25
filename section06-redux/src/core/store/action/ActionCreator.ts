import { CounterActionType } from "./ActionType";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { CounterAction } from "../type/CounterAction";
import { CounterStoreState } from "../Reducer";


class CounterActionCreator {

  static increment = (): CounterAction => {
    return { type: CounterActionType.INCREMENT, payload: null };
  }

  static decrement = () => {
    return { type: CounterActionType.DECREMENT, payload: null  };
  }

  static add = (number: number) => {
    return { type: CounterActionType.ADD, payload: number };
  }

  static subtract = (number: number) => {
    return { type: CounterActionType.SUBTRACT, payload: number };
  }

  static storeResult = (count: number) => {
    return { type: CounterActionType.STORE_RESULT, payload: count };
  }

  static deleteResult = (id: number) => {
    return { type: CounterActionType.DELETE_RESULT, payload: id };
  }

  static asyncStoreResult = (count: number) => {
    return (dispatch: Dispatch<AnyAction>, getState: () => CounterStoreState) => {
      const oldState = getState();
      console.log(oldState);
      setTimeout(() => dispatch(CounterActionCreator.storeResult(count)), (2000));
    };
  }
}

export { CounterActionCreator };