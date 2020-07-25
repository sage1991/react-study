import { Middleware, MiddlewareAPI, Action } from "redux";
import { Dispatch } from "react";


const logger: Middleware = (api: MiddlewareAPI) => {
  
  console.log(api);

  return (next: Dispatch<Action>) => {
    console.log(next);
    return (action: Action) => {
      console.log("[Middleware] dispatching action", action);
      const result = next(action);
      console.log("[Middleware] next state", api.getState());
      return result;
    }
  }
}


export { logger };