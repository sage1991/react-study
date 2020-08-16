import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"
import { burgerReducer } from "./reducer/BurgerReducer";
import { BurgerState } from "./reducer/BurgerReducer";
import { uiReducer, UIState } from "./reducer/UIReducer";
import { orderReducer, OrderState } from "./reducer/OrderReducer";
import { signReducer, SignState } from "./reducer/SignReducer";

const reducer = combineReducers({
  burger: burgerReducer,
  order: orderReducer,
  sign: signReducer,
  ui: uiReducer
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
const dispatch = store.dispatch;

export type StoreState = { burger: BurgerState, ui: UIState, order: OrderState, sign: SignState };
export { store, dispatch };