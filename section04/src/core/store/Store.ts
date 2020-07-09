import { createStore, combineReducers } from "redux";
import { burgerReducer } from "./reducer/BurgerReducer";
import { BurgerState } from "./reducer/BurgerReducer";

const reducer = combineReducers({
  burger: burgerReducer
});

const store = createStore(reducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

export type StoreState = { burgerState: BurgerState };
export { store };