import React, { FC, AnimationEvent, useState, MouseEvent } from "react";
import css from "./Toast.module.css";
import { Visibility } from "../../../code/common/Visibility";
import { Callback } from "../../../types/function/Callback";
import { Optional } from "../../../types/data/Optional";

const Toast: FC<ToastProps> = (props) => {

  const [ state, setState ] = useState<ToastState>({
    status: props.status ?? Visibility.SHOW,
    timer: null
  });

  if (state.status === Visibility.NONE) return null;

  const classes = [ css.toast, state.status === Visibility.SHOW ? css.show : css.hide ];
  const onAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === css.showToast && state.status === Visibility.SHOW) {
      const timer = setTimeout(() => {
        setState({ status: Visibility.HIDE, timer: null });
      }, 1500);
      setState({ ...state, timer: timer });
    } else if (e.animationName === css.hideToast) {
      setState({ status: Visibility.NONE, timer: null });
      if (props.onRemoved) props.onRemoved(props.id);
    }
  }

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    if (state.timer) clearTimeout(state.timer);
    setState({ ...state, status: Visibility.HIDE });
  }

  return <div className={classes.join(" ")} onAnimationEnd={onAnimationEnd} onClick={onClick}>{ props.children }</div>;
}


interface ToastProps {
  id?: number;
  status?: Visibility;
  onRemoved?: Callback;
}

interface ToastState {
  status: Visibility;
  timer: Optional<NodeJS.Timeout>;
}

export { Toast };