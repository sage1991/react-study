import { takeEvery } from "redux-saga/effects";
import { SignActionType } from "../action/type/SignAction";
import { checkAuthTimeoutSaga, logoutSaga } from "./auth";


export function* watchAuth() {
  yield takeEvery(SignActionType.INIT_LOG_OUT, logoutSaga);
  yield takeEvery(SignActionType.CHECK_AUTH_TIMEOUT, checkAuthTimeoutSaga);
}

