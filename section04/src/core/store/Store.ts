import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"
import { burgerReducer } from "./reducer/BurgerReducer";
import { BurgerState } from "./reducer/BurgerReducer";
import { uiReducer, UIState } from "./reducer/UIReducer";
import { orderReducer, OrderState } from "./reducer/OrderReducer";
import { signReducer, SignState } from "./reducer/SignReducer";
import createSagaMiddleware from "redux-saga";
import { watchAuth } from "./sagas";


const reducer = combineReducers({
  burger: burgerReducer,
  order: orderReducer,
  sign: signReducer,
  ui: uiReducer
});

const saga = createSagaMiddleware();

const composeEnhancers = process.env.NODE_ENV === "development" ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, saga)));
const dispatch = store.dispatch;

saga.run(watchAuth);

export type StoreState = { burger: BurgerState, ui: UIState, order: OrderState, sign: SignState };
export { store, dispatch };