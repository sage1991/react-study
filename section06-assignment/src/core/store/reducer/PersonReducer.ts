import { PersonStoreState } from "../Store";
import { PersonAction } from "../action/PersonAction";
import { PersonModel } from "../../model/PersonModel";
import { Action } from "../Action";


const initialState = {
  people: []
};

const personReducer = (state: PersonStoreState = initialState, action: Action<PersonAction, PersonModel>): PersonStoreState => {
  switch (action.type) {
    case PersonAction.ADD : 
      return {
        people: [ ...state.people, action.payload ]
      };
    case PersonAction.DELETE :
      return {
        people: [ ...state.people ].filter((personModel) => personModel.id !== action.payload.id)
      };
    default : 
      return state;
  }
}

export { personReducer };