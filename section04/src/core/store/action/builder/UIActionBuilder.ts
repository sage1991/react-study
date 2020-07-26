import { ReactNode } from "react"
import { UIActionType } from "../type/UIAction"
import { Callback } from "../../../types/function/Callback"


class UIActionBuilder {

  static showModal = (node: ReactNode) => {
    return { type: UIActionType.SHOW_MODAL, payload: node };
  }

  static hideModal = () => {
    return { type: UIActionType.HIDE_MODAL, payload: null };
  }

  static showSnackbar = (message: string, button?: string, onClick?: Callback) => {
    return { type: UIActionType.SHOW_SNACKBAR, payload: { message: message, button: button, onClick: onClick } };
  }

  static hideSnackbar = () => {
    return { type: UIActionType.HIDE_SNACKBAR, payload: null };
  }

  static addPopup = (node: ReactNode) => {
    return { type: UIActionType.ADD_POPUP, payload: node };
  }

  static removePopup = (id: number) => {
    return { type: UIActionType.REMOVE_POPUP, payload: id };
  }

  static addToast = (message: string) => {
    return { type: UIActionType.ADD_TOAST, payload: message };
  }

  static removeToast = (id: number) => {
    return { type: UIActionType.REMOVE_TOAST, payload: id };
  }

  static showDrawer = (node?: ReactNode) => {
    return { type: UIActionType.SHOW_DRAWER, payload: node };
  }

  static hideDrawer = () => {
    return { type: UIActionType.HIDE_DRAWER, payload: null }; 
  }

  static setDrawer = (node: ReactNode) => {
    return { type: UIActionType.SET_DRAWER, payload: node };
  }
}


export { UIActionBuilder };