import React, { FC } from "react";
import css from "./Toast.module.css";
import { Visibility } from "../../../code/common/Visibility";

const Toast: FC<ToastProps> = (props) => {
  
  if (props.status === Visibility.NONE) return null;

  const classes = [ css.toast, props.status === Visibility.SHOW ? css.show : css.hide ];

  return <div className={classes.join(" ")}>{ props.children }</div>;
}


interface ToastProps {
  status: Visibility;
}


export { Toast };