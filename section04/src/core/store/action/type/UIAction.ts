import { Action } from "../Action";

enum UIActionType {
  SHOW_MODAL = "/UIAction/SHOW_MODAL",
  HIDE_MODAL = "/UIAction/HIDE_MODAL",
  SHOW_SNACKBAR = "/UIAction/SHOW_SNACKBAR",
  HIDE_SNACKBAR = "/UIAction/HIDE_SNACKBAR",
  ADD_POPUP = "/UIAction/ADD_POPUP",
  REMOVE_POPUP = "/UIAction/REMOVE_POPUP",
  ADD_TOAST = "/UIAction/ADD_TOAST",
  REMOVE_TOAST = "/UIAction/REMOVE_TOAST",
  SHOW_DRAWER = "/UIAction/SHOW_DRAWER",
  HIDE_DRAWER = "/UIAction/HIDE_DRAWER",
  SET_DRAWER = "/UIAction/SET_DRAWER",
}

export type UIAction = Action<UIActionType>;
export { UIActionType };