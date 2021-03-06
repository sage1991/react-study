import { Action } from "../Action";


enum SignActionType {
  REQUEST_SIGN_IN = "/SignAction/REQUEST_SIGN_IN",
  SIGN_IN = "/SignAction/SIGN_IN",
  LOG_OUT = "/SignAction/LOG_OUT",
  INIT_LOG_OUT = "/SignAction/INIT_LOG_OUT",
  SET_REDIRECTION = "/SignAction/SET_REDIRECTION",
  CHECK_AUTH_TIMEOUT = "/SignAction/CHECK_AUTH_TIMEOUT"
}

export type SignAction = Action<SignActionType>;
export { SignActionType };