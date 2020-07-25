import React, { FC } from "react";
import { CounterOutput } from "../../components/CounterOutput/CounterOutput";
import { CounterControl } from "../../components/CounterControl/CounterControl";
import { CounterAction, ActionCreator } from "../../core/store/action/Action";
import { connect } from "react-redux";
import { CounterState, ResultState } from "../../core/store/Store";
import { Dispatch, Action } from "redux";


type CounterProps = {
  counter: number;
  results: { id: number, value: number }[];
  onIncrememtCounter: () => void;
  onDecrememtCounter: () => void;
  onAddCounter: () => void;
  onSubtractCounter: () => void;
  onStoreResults: (counter: number) => void;
  onDeleteResults: (id: number) => void;
}


const Counter: FC<CounterProps> = props => {
  return (
    <div>
      <CounterOutput value={props.counter} />
      <CounterControl label="increment" onClick={props.onIncrememtCounter} />
      <CounterControl label="decrement" onClick={props.onDecrememtCounter} />
      <CounterControl label="add 5" onClick={props.onAddCounter} />
      <CounterControl label="subtract 5" onClick={props.onSubtractCounter} />
      <hr/>
      <button onClick={props.onStoreResults.bind(null, props.counter)}>Store Result</button>
      <ul>
        { 
          props.results.map((result:{ id: number, value: number }) => (
            <li key={result.id}>
              {result.value} <button onClick={props.onDeleteResults.bind(null, result.id)}>delete</button>
            </li>
          )) 
        }
      </ul>
    </div>
  );
}


const mapStoreStateToProps = (state: { counterState: CounterState, resultState: ResultState }) => {
  return {
    counter: state.counterState.counter,
    results: state.resultState.results
  };
};

const mapStoreDispatcherToProps = (dispatch: Dispatch<Action<CounterAction>>) => {
  return {
    onIncrememtCounter: () => dispatch(ActionCreator.increment()),
    onDecrememtCounter: () => dispatch(ActionCreator.decrement()),
    onAddCounter: () => dispatch(ActionCreator.add()),
    onSubtractCounter: () => dispatch(ActionCreator.subtract()),
    onStoreResults: (counter: number) => ActionCreator.asyncStoreResult(counter),
    onDeleteResults: (id: number) => dispatch(ActionCreator.deleteResult(id)),
  };
};

const reduxConnector = connect(mapStoreStateToProps, mapStoreDispatcherToProps);
const ConnectedCounter = reduxConnector(Counter);

export { ConnectedCounter };

