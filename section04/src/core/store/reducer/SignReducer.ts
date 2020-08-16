import { AuthModel } from "../../../business/model/AuthModel";
import { SignAction, SignActionType } from "../action/type/SignAction";



const INITIAL_STATE: SignState = { auth: new AuthModel() };

const signReducer = (state = INITIAL_STATE, action: SignAction) => {
  switch (action.type) {
    case SignActionType.SIGN_IN :
      return { auth: action.payload };
    case SignActionType.LOG_OUT :
      return { auth: new AuthModel() };
    default :
      return state;
  }
}


export interface SignState {
  auth: AuthModel;
}

export { signReducer };