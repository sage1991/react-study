import { UIActionType, UIAction } from "../action/type/UIAction";
import { Visibility } from "../../code/common/Visibility";
import { ReactNode } from "react";
import { Callback } from "../../types/function/Callback";


const initialState: UIState = {
  snackbar: { status: Visibility.NONE, message: "", button: "", onClick: () => {} },
  modal: { status: Visibility.NONE, node: null },
  drawer: { status: Visibility.NONE, node: null },
  popups: [],
  toasts: [],
}


const uiReducer = (state = initialState, action: UIAction): UIState => {
  switch (action.type) {
    case UIActionType.SET_DRAWER : 
      return { ...state, drawer: { ...state.drawer, node: action.payload } };
    case UIActionType.SHOW_DRAWER :
      return { ...state, drawer: { status: Visibility.SHOW, node: action.payload ?? state.drawer.node } };
    case UIActionType.HIDE_DRAWER :
      return { ...state, drawer: { ...state.drawer, status: Visibility.HIDE } };
    case UIActionType.SHOW_SNACKBAR : 
      return { ...state, snackbar: { status: Visibility.SHOW, message: action.payload.message, button: action.payload.button, onClick: action.payload.onClick } };
    case UIActionType.HIDE_SNACKBAR : 
      return { ...state, snackbar: { ...state.snackbar, status: Visibility.HIDE } };
    case UIActionType.SHOW_MODAL : 
      return { ...state, modal: { status: Visibility.SHOW, node: action.payload } };
    case UIActionType.HIDE_MODAL : 
      return { ...state, modal: { ...state.modal, status: Visibility.HIDE } };
    case UIActionType.ADD_POPUP : 
      return { ...state, popups: [ ...state.popups, { id: Date.now(), node: action.payload } ] };
    case UIActionType.REMOVE_POPUP : 
      return { ...state, popups: [ ...state.popups ].filter(popup => popup.id !== action.payload) };
    case UIActionType.ADD_TOAST : 
      return { ...state, toasts: [ ...state.toasts, { id: Date.now(), node: action.payload } ] };
    case UIActionType.REMOVE_TOAST : 
      return { ...state, toasts: [ ...state.toasts ].filter(toast => toast.id !== action.payload) };
    default : 
      return state;
  }
}


export { uiReducer };
export interface UIState {
  snackbar: { status: Visibility; message: string; button: string; onClick: Callback; };
  drawer: { status: Visibility; node?: ReactNode; };
  modal: { status: Visibility; node: ReactNode; };
  popups: { id: number; node: ReactNode; }[];
  toasts: { id: number; node: ReactNode; }[];
};
