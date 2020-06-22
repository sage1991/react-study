import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Action } from "../core/store/Action";
import { PersonAction } from "../core/store/action/PersonAction";
import { PersonModel } from "../core/model/PersonModel";
import { People } from "../components/People";
import { PersonStoreState } from "../core/store/store";

const mapStateToProps = (state: PersonStoreState) => {
  return {
    people: state.people
  };
};
const mapDispatchToProps = (dispatch: Dispatch<Action<PersonAction, PersonModel>>) => {
  return {
    onPersonAdd: (person: PersonModel) => { dispatch(new Action(PersonAction.ADD, person)) },
    onPersonDelete: (person: PersonModel) => { dispatch(new Action(PersonAction.DELETE, person)) }
  }
}
const personStoreConnector = connect(mapStateToProps, mapDispatchToProps);
const ConnectedPeople = personStoreConnector(People);

export { ConnectedPeople };