import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Action } from "../core/store/Action";
import { PersonAction } from "../core/store/action/PersonAction";
import { PersonModel } from "../core/model/PersonModel";
import { People } from "../components/People";
import { PersonStoreState } from "../core/store/Store";

const mapStateToProps = (state: PersonStoreState) => {
  return {
    people: state.people
  };
};
const mapDispatchToProps = (dispatch: Dispatch<Action<PersonAction, PersonModel>>) => {
  return {
    onPersonAdd: (person: PersonModel) => { dispatch({ type: PersonAction.ADD, payload: person}) },
    onPersonDelete: (person: PersonModel) => { dispatch({ type: PersonAction.DELETE, payload: person}) }
  }
}
const personStoreConnector = connect(mapStateToProps, mapDispatchToProps);
const ConnectedPeople = personStoreConnector(People);

export { ConnectedPeople };