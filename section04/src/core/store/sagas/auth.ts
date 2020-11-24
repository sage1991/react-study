import { LocalRepository } from "../../persistent/LocalRepository";
import { PersistentKey } from "../../persistent/PersistentKey";
import { SignAction } from "../action/type/SignAction";
import { delay, put } from "redux-saga/effects";
import { SignActionBuilder } from "../action/builder/SignActionBuilder";
import { AuthModel, AuthModelBuilder } from "../../../business/model/AuthModel";
import { RequestBuilder } from "../../http/model/Request";
import { authClient } from "../../http/HttpClient";



export function* logoutSaga(action: SignAction) {
  yield LocalRepository.delete(PersistentKey.AUTH);
  yield LocalRepository.delete(PersistentKey.AUTH_EXPIRATION);
  yield put(SignActionBuilder.handleLogout());
}


export function* checkAuthTimeoutSaga(action: SignAction) {
  yield delay(action.payload);
  yield put(SignActionBuilder.logout());
}


export function* signInSaga(action: SignAction) {
  const { payload } = action;
  const request = new RequestBuilder<AuthModel>().payload(payload).build();
    try {
      const response = yield authClient.post(":signInWithPassword?key=AIzaSyArMzT8Xq7qWx5eTa2O2qnxYrJ81HzyUMo", request, (data) => {
        return {
          auth: new AuthModelBuilder().email(payload.email)
                                      .password(payload.password)
                                      .id(data.localId)
                                      .token(data.idToken)
                                      .refreshToken(data.refreshToken)
                                      .build(),
          expirationTime: +data.expiresIn * 1000
        }
      });
    } catch (e) {
      
    }
      
}