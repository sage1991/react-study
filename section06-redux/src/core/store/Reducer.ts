import { combineReducers } from "redux";
import { CounterAction } from "./type/CounterAction";
import { CounterActionType } from "./action/ActionType";



const counterState: CounterState = { counter: 0 };
const resultState: ResultState = { results: [] };


const counterReeducer = (state: CounterState = counterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case CounterActionType.INCREMENT : 
      return {
        counter: state.counter + 1
      };
    case CounterActionType.DECREMENT : 
      return {
        counter: state.counter - 1
      };
    case CounterActionType.ADD : 
      return {
        counter: state.counter + action.payload
      };
    case CounterActionType.SUBTRACT : 
      return {
        counter: state.counter - action.payload
      };
    default : 
      return state;
  }
}


const resultReducer = (state: ResultState = resultState, action: CounterAction): ResultState => {
  switch (action.type) {
    case CounterActionType.STORE_RESULT : 
      return {
        results: [ ...state.results, { id: Date.now(), value: action.payload } ]
      };
    case CounterActionType.DELETE_RESULT :
      return {
        results: state.results.filter(data => data.id !== action.payload)
      };
    default : 
      return state;
  }
}


const CounterStateReducer = combineReducers({
  counter: counterReeducer,
  results: resultReducer
});


export type CounterState = { counter: number; }
export type ResultState = { results: { id: number, value: number }[]; }
export type CounterStoreState = { counter: CounterState; results: ResultState };
export { CounterStateReducer };
