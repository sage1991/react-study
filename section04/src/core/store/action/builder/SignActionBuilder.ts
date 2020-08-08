import { SignActionType } from "../type/SignAction";
import { Dispatch } from "redux";
import { Callback } from "../../../types/function/Callback";
import { AuthModel } from "../../../../business/model/AuthModel";


class SignActionBuilder {
  
  static requestSignIn = (auth: AuthModel, success: Callback, fail: Callback) => {
    return (dispatch: Dispatch) => {

    }
  }

  
  static signIn = () => {
    return { type: SignActionType.SIGN_IN };
  }

}

export { SignActionBuilder };