import { connect } from "react-redux";
import { Logout } from "../../page/sign/Logout";
import { Dispatch } from "redux";
import { SignActionBuilder } from "../../../core/store/action/builder/SignActionBuilder";


const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    logout: () => dispatch(SignActionBuilder.logout()),
  }
}

const LogoutWithStore = connect(null, mapDispatchToProps)(Logout);

export { LogoutWithStore };