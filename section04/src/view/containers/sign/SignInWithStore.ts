import { connect } from "react-redux"
import { SignIn } from "../../page/sign/SignIn";
import { ThunkDispatch } from "redux-thunk";
import { StoreState } from "../../../core/store/Store";
import { SignAction } from "../../../core/store/action/type/SignAction";
import { SignActionBuilder } from "../../../core/store/action/builder/SignActionBuilder";
import { AuthModel } from "../../../business/model/AuthModel";
import { Callback } from "../../../core/types/function/Callback";


const mapDispatchToProps = (dispatch: ThunkDispatch<StoreState, null, SignAction>) => {
  return {
    requestSignIn: (auth: AuthModel, success: Callback, fail: Callback) => dispatch(SignActionBuilder.requestSignIn(auth, success, fail)),
  }
}

const connector = connect(null, mapDispatchToProps);
const SignInWithStore = connector(SignIn);

export { SignInWithStore };