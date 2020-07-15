import { createStore, combineReducers } from "redux";
import { burgerReducer } from "./reducer/BurgerReducer";
import { BurgerState } from "./reducer/BurgerReducer";
import { uiReducer, UIState } from "./reducer/UIReducer";

const reducer = combineReducers({
  burger: burgerReducer,
  ui: uiReducer
});

const store = createStore(reducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
const dispatch = store.dispatch;

export type StoreState = { burger: BurgerState, ui: UIState };
export { store, dispatch };