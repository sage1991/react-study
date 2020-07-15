import { Action } from "../action/Action";
import { UIAction } from "../action/actionType/UIAction";
import { Visibility } from "../../code/common/Visibility";
import { ReactNode } from "react";
import { Callback } from "../../types/function/Callback";


const initialState: UIState = {
  drawer: { status: Visibility.NONE, node: null },
  snackbar: { status: Visibility.NONE, message: "", button: "", onClick: () => {} },
  modal: { status: Visibility.NONE, node: null },
  popups: [],
  toasts: [],
}


const uiReducer = (state = initialState, action: Action<UIAction>): UIState => {
  switch (action.type) {
    case UIAction.OPEN_DRAWER : 
      return { ...state, drawer: { status: Visibility.SHOW, node: action.payload } };
    case UIAction.CLOSE_DRAWER : 
      return { ...state, drawer: { ...state.drawer, status: Visibility.HIDE } };
    case UIAction.SHOW_SNACKBAR : 
      return { ...state, snackbar: { status: Visibility.SHOW, message: action.payload.message, button: action.payload.button, onClick: action.payload.onClick } };
    case UIAction.HIDE_SNACKBAR : 
      return { ...state, snackbar: { ...state.snackbar, status: Visibility.HIDE } };
    case UIAction.SHOW_MODAL : 
      return { ...state, modal: { status: Visibility.SHOW, node: action.payload } };
    case UIAction.HIDE_MODAL : 
      return { ...state, modal: { ...state.modal, status: Visibility.HIDE } };
    case UIAction.ADD_POPUP : 
      return { ...state, popups: [ ...state.popups, action.payload ] };
    case UIAction.REMOVE_POPUP : 
      return { ...state, popups: [ ...state.popups ].filter(popup => popup.id !== action.payload) };
    case UIAction.ADD_TOAST : 
      return { ...state, toasts: [ ...state.toasts, action.payload ] };
    case UIAction.REMOVE_TOAST : 
      return { ...state, toasts: [ ...state.toasts ].filter(toast => toast.id !== action.payload) };
    default : 
      return state;
  }
}


export { uiReducer };
export interface UIState {
  drawer: { status: Visibility; node: ReactNode; };
  snackbar: { status: Visibility, message: string; button: string; onClick: Callback; };
  modal: { status: Visibility, node: ReactNode; };
  popups: { id: number, node: ReactNode }[];
  toasts: { id: number, node: ReactNode }[];
};