import { ReactNode } from "react";
import { Callback } from "../../../types/function/Callback";


export type SnackbarPayload = { message: string; button?: string; onClick?: Callback; };
export type ModalPayload = ReactNode;
export type PopupPayload = ReactNode;
export type ToastPayload = ReactNode;
export type DrawerPayload = ReactNode;