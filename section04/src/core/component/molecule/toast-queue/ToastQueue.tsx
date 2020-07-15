import React, { ReactNode, FC, Children, cloneElement, Fragment } from "react";
import { Callback } from "../../../types/function/Callback";


const ToastQueue: FC<ToastQueueProps> = (props) => {
  if (props.toast.length === 0) return null;
  const children = Children.map(props.toast, child => cloneElement(child as any, { onRemoved: props.remove }));
  const toast = children?.length ? children[0] : null;
  return <Fragment>{ toast }</Fragment>;
}


interface ToastQueueProps {
  toast: ReactNode[];
  remove: Callback;
}


export { ToastQueue };