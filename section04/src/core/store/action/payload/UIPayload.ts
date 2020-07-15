import { Visibility } from "../../../code/common/Visibility";
import { ReactNode } from "react";
import { Callback } from "../../../types/function/Callback";


export type SnackbarPayload = { status: Visibility, message: string; button: string; onClick: Callback; };
export type ModalPayload = { status: Visibility, node: ReactNode; };
export type PopupPayload = { id: number, node: ReactNode };
export type ToastPayload = { id: number, node: ReactNode };

