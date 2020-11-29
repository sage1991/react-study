import { useCallback, useReducer } from "react";

enum HttpActionType {
  SEND,
  RESPONSE,
  ERROR,
  CLEAR
}

interface HttpSendAction {
  type: HttpActionType.SEND;
}

interface HttpResponseAction {
  type: HttpActionType.RESPONSE;
  payload: any;
}

interface HttpErrorAction {
  type: HttpActionType.ERROR;
  message: string;
}

interface HttpClearAction {
  type: HttpActionType.CLEAR;
}

interface HttpState {
  data: any;
  loading: boolean;
  error?: string;
}

type HttpAction = HttpSendAction | HttpResponseAction | HttpErrorAction | HttpClearAction;

const reducer = (prevState: HttpState, action: HttpAction) => {
  switch (action.type) {
    case HttpActionType.CLEAR:
      return { ...prevState, error: undefined };
    case HttpActionType.ERROR:
      return { ...prevState, loading: false, error: action.message };
    case HttpActionType.RESPONSE:
      return  { loading: false, error: undefined, data: action.payload };
    case HttpActionType.SEND:
      return { ...prevState, loading: true, error: undefined };
  }
}

export const useHttp = (): [ HttpState, (url: string, config?: RequestInit) => Promise<void>, () => void ] => {
  const [ http, dispatch ] = useReducer(reducer, { data: null, error: undefined, loading: false });

  const sendRequest = useCallback(async (url: string, config?: RequestInit) => {
    dispatch({ type: HttpActionType.SEND });
    try {
      const response = await fetch(url, config);
      dispatch({ type: HttpActionType.RESPONSE, payload: await response.json() });
    } catch (e) {
      dispatch({ type: HttpActionType.ERROR, message: "Something went wrong..." });
    }
  }, [ dispatch ]);

  const clear = useCallback(() => dispatch({ type: HttpActionType.CLEAR }), [ dispatch ]);

  return [ http, sendRequest, clear ];
}