import { CounterAction } from "./Action";
import { combineReducers } from "redux";
import { CounterState, ResultState } from "./Store";
import { Action } from "./type/Action";

type CounterPayLoad = {
  value: number;
}

type ResultPayLoad = {
  value: number;
  id: number;
}

const initialCounterState: CounterState = { counter: 0 };
const initialResultsState: ResultState = { results: [] };


const counterReeducer = (state: CounterState = initialCounterState , action: Action<CounterAction, CounterPayLoad>): CounterState => {
  
  let value = 0;
  switch (action.type) {
    case CounterAction.INCREMENT : 
      value = 1;
      break;
    case CounterAction.DECREMENT : 
      value = -1;
      break;
    case CounterAction.ADD : 
      value = action.payload.value;
      break;
    case CounterAction.SUBTRACT : 
      value = action.payload.value * -1;
      break;
  }

  return {
    counter: state.counter + value
  };

}


const resultReducer = (state: ResultState = initialResultsState , action: Action<CounterAction, ResultPayLoad>): ResultState => {
  
  switch (action.type) {
    case CounterAction.STORE_RESULT : 
      return {
        results: [ ...state.results, { id: Date.now(), value: action.payload.value } ]
      };
    case CounterAction.DELETE_RESULT :
      return {
        results: state.results.filter(data => data.id !== action.payload.id)
      };
    default : 
      return state;
  }

}


const CounterStateReducer = combineReducers({
  counterState: counterReeducer,
  resultState: resultReducer
});

export { CounterStateReducer };
