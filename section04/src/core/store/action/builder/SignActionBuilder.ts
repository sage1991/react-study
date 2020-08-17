import { SignActionType } from "../type/SignAction";
import { Dispatch } from "redux";
import { Callback } from "../../../types/function/Callback";
import { AuthModel, AuthModelBuilder } from "../../../../business/model/AuthModel";
import { authClient } from "../../../http/HttpClient";
import { RequestBuilder } from "../../../http/model/Request";
import { ThunkDispatch } from "redux-thunk";
import { StoreState } from "../../Store";
import { Action } from "../Action";
import { LocalRepository } from "../../../persistent/LocalRepository";
import { PersistentKey } from "../../../persistent/PersistentKey";


class SignActionBuilder {

  private static timer: NodeJS.Timeout;
  
  static setRedirection = (redirection: string) => ({ type: SignActionType.SET_REDIRECTION, payload: redirection });
  static signIn = (auth: AuthModel) => ({ type: SignActionType.SIGN_IN, payload: auth });
  
  static logout = () => {
    LocalRepository.delete(PersistentKey.AUTH);
    LocalRepository.delete(PersistentKey.AUTH_EXPIRATION);
    return { type: SignActionType.LOG_OUT, payload: null}
  };
  
  static requestSignUp = (auth: AuthModel, success: Callback, fail: Callback) => async (dispatch: ThunkDispatch<StoreState, null, Action>) => {
    try {
      const request = new RequestBuilder<AuthModel>().payload(auth).build();
      const response = await authClient.post(":signUp?key=AIzaSyArMzT8Xq7qWx5eTa2O2qnxYrJ81HzyUMo", request, (data) => {
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
      SignActionBuilder.persistAuth(response.data.auth, response.data.expirationTime);

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
      SignActionBuilder.persistAuth(response.data.auth, response.data.expirationTime);

      success();
    } catch (e) {
      fail(e);
    }
  }


  static checkAuthTimeout = (expirationTime: number) => (dispatch: Dispatch) => {
    if (SignActionBuilder.timer) clearTimeout(SignActionBuilder.timer);
    SignActionBuilder.timer = setTimeout(() => { dispatch(SignActionBuilder.logout()) }, expirationTime);
  }

  
  private static persistAuth = (auth: AuthModel, expirationTime: number) => {
    const expireAt = Date.now() + expirationTime;
    LocalRepository.save(PersistentKey.AUTH, JSON.stringify(auth));
    LocalRepository.save(PersistentKey.AUTH_EXPIRATION, expireAt.toString());
  }


  static tryAutoSignIn = () => (dispatch: ThunkDispatch<StoreState, null, Action>) => {
    const expireAt = LocalRepository.retrieve(PersistentKey.AUTH_EXPIRATION);
    const auth = new AuthModelBuilder().fromJSON(LocalRepository.retrieve(PersistentKey.AUTH)).build();
    if (
      !auth.token 
      || !expireAt 
      || +expireAt <= Date.now()
    ) {
      dispatch(SignActionBuilder.logout());
      return;
    }
    dispatch(SignActionBuilder.requestSignIn(auth, () => {}, () => {}));
  }

}

export { SignActionBuilder };