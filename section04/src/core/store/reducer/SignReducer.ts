import { AuthModel } from "../../../business/model/AuthModel";
import { SignAction, SignActionType } from "../action/type/SignAction";



const INITIAL_STATE: SignState = { auth: new AuthModel(), redirection: "/" };

const signReducer = (state = INITIAL_STATE, action: SignAction) => {
  switch (action.type) {
    case SignActionType.SIGN_IN :
      return { ...state, auth: action.payload };
    case SignActionType.LOG_OUT :
      return { ...state, auth: new AuthModel() };
    case SignActionType.SET_REDIRECTION :
      return { ...state, redirection: action.payload };
    default :
      return state;
  }
}

export interface SignState {
  auth: AuthModel;
  redirection: string;
}

export { signReducer };