import { createStore, combineReducers } from "redux";
import { burgerReducer } from "./reducer/BurgerReducer";


const reducer = combineReducers({
  burger: burgerReducer
});

const store = createStore(reducer);

export { store };