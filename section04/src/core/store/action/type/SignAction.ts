import { Action } from "../Action";


enum SignActionType {
  REQUEST_SIGN_IN = "/SignAction/REQUEST_SIGN_IN",
  SIGN_IN = "/SignAction/SIGN_IN",
  LOG_OUT = "/SignAction/LOG_OUT",
}

export type SignAction = Action<SignActionType>;
export { SignActionType };