import { createStore } from "redux";
import { personReducer } from "./reducer/PersonReducer";
import { PersonModel } from "../model/PersonModel";


const personStore = createStore(personReducer);
const personDispatcher = personStore.dispatch;

export type PersonStoreState = { people: PersonModel[] }
export { personStore, personDispatcher };