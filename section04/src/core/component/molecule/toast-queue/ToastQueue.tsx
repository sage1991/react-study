import React, { ReactNode, FC, cloneElement, Fragment } from "react";
import { Callback } from "../../../types/function/Callback";


const ToastQueue: FC<ToastQueueProps> = (props) => {
  if (props.toasts.length === 0) return null;
  const children = props.toasts.map(child => cloneElement(child.node as any, { onRemoved: props.remove, id: child.id, key: child.id }));
  const toast = children?.length ? children[0] : null;
  return <Fragment>{ toast }</Fragment>;
}


interface ToastQueueProps {
  toasts: { id: number; node: ReactNode }[];
  remove: Callback;
}


export { ToastQueue };