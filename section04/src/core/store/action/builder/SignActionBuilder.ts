import { SignActionType } from "../type/SignAction";
import { Dispatch } from "redux";
import { Callback } from "../../../types/function/Callback";
import { AuthModel, AuthModelBuilder } from "../../../../business/model/AuthModel";
import { authClient } from "../../../http/HttpClient";
import { RequestBuilder } from "../../../http/model/Request";
import { ThunkDispatch } from "redux-thunk";
import { StoreState } from "../../Store";
import { Action } from "../Action";


class SignActionBuilder {

  private static timer: NodeJS.Timeout;
  
  static signIn = (auth: AuthModel) => ({ type: SignActionType.SIGN_IN, payload: auth });
  static logout = () => ({ type: SignActionType.LOG_OUT });
  
  static requestSignUp = (auth: AuthModel, success: Callback, fail: Callback) => async (dispatch: ThunkDispatch<StoreState, null, Action>) => {
    try {
      const request = new RequestBuilder<AuthModel>().payload(auth).build();
      const response = await authClient.post(":signInWithPassword?key=AIzaSyArMzT8Xq7qWx5eTa2O2qnxYrJ81HzyUMo", request, (data) => {
        return {
          auth: new AuthModelBuilder().email(auth.email)
                                      .password(auth.password)
                                      .id(data.localId)
                                      .token(data.idToken)
                                      .refreshToken(data.refreshToken)
                                      .build(),
          expirationTime: data.expiresIn
        }
      });
      dispatch(SignActionBuilder.signIn(response.data.auth));
      dispatch(SignActionBuilder.checkAuthTimeout(response.data.expirationTime));
      success();
    } catch (e) {
      console.log(e);
      fail(e);
    }
  }


  static requestSignIn = (auth: AuthModel, success: Callback, fail: Callback) => async (dispatch: ThunkDispatch<StoreState, null, Action>) => {
    try {
      const request = new RequestBuilder<AuthModel>().payload(auth).build();
      const response = await authClient.post(":signInWithPassword?key=AIzaSyArMzT8Xq7qWx5eTa2O2qnxYrJ81HzyUMo", request, (data) => {
        return {
          auth: new AuthModelBuilder().email(auth.email)
                                      .password(auth.password)
                                      .id(data.localId)
                                      .token(data.idToken)
                                      .refreshToken(data.refreshToken)
                                      .build(),
          expirationTime: +data.expiresIn * 1000
        }
      });
      dispatch(SignActionBuilder.signIn(response.data.auth));
      dispatch(SignActionBuilder.checkAuthTimeout(response.data.expirationTime));
      success();
    } catch (e) {
      fail(e);
    }
  }


  static checkAuthTimeout = (expirationTime: number) => (dispatch: Dispatch) => {
    if (SignActionBuilder.timer) clearTimeout(SignActionBuilder.timer);
    SignActionBuilder.timer = setTimeout(() => { dispatch(SignActionBuilder.logout()) }, expirationTime);
  }
  
}

export { SignActionBuilder };