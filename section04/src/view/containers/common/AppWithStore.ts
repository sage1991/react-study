import { connect } from "react-redux";
import { App } from "../../../App";
import { ThunkDispatch } from "redux-thunk";
import { StoreState } from "../../../core/store/Store";
import { Action } from "../../../core/store/action/Action";
import { SignActionBuilder } from "../../../core/store/action/builder/SignActionBuilder";


const mapDispatchToProps = (dispatch: ThunkDispatch<StoreState, null, Action>) => {
  return {
    tryAutoSignIn: () => dispatch(SignActionBuilder.tryAutoSignIn()),
  }
}
const AppWithStore = connect(null, mapDispatchToProps)(App);
export { AppWithStore };