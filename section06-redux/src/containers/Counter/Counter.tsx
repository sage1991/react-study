import React, { FC } from "react";
import { CounterOutput } from "../../components/CounterOutput/CounterOutput";
import { CounterControl } from "../../components/CounterControl/CounterControl";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { CounterActionCreator } from "../../core/store/action/ActionCreator";
import { CounterAction } from "../../core/store/type/CounterAction";
import { CounterStoreState } from "../../core/store/Reducer";


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


const mapStoreStateToProps = (state: CounterStoreState) => {
  return {
    counter: state.counter.counter,
    results: state.results.results
  };
};

const mapStoreDispatcherToProps = (dispatch: ThunkDispatch<CounterStoreState, null, CounterAction>) => {
  return {
    onIncrememtCounter: () => dispatch(CounterActionCreator.increment()),
    onDecrememtCounter: () => dispatch(CounterActionCreator.decrement()),
    onAddCounter: () => dispatch(CounterActionCreator.add(5)),
    onSubtractCounter: () => dispatch(CounterActionCreator.subtract(5)),
    onStoreResults: (counter: number) => dispatch(CounterActionCreator.asyncStoreResult(counter)),
    onDeleteResults: (id: number) => dispatch(CounterActionCreator.deleteResult(id)),
  };
};

const reduxConnector = connect(mapStoreStateToProps, mapStoreDispatcherToProps);
const ConnectedCounter = reduxConnector(Counter);

export { ConnectedCounter };