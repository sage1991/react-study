import { CounterStateReducer } from "./Reducer";
import { createStore } from "redux";

const counterStore = createStore(CounterStateReducer);

export type CounterState = { counter: number; }
export type ResultState = { results: { id: number, value: number }[]; }
export type CounterStoreState = CounterState & ResultState;
export { counterStore };