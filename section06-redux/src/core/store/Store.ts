import { CounterStateReducer } from "./Reducer";
import { createStore, applyMiddleware, compose } from "redux";
import { logger } from "./Middleware";
import thunk from "redux-thunk";


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(CounterStateReducer, composeEnhancers(applyMiddleware(logger, thunk)));

export { store };