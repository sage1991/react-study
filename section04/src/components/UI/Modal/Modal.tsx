import React, { Fragment, FC, useRef, useEffect, RefObject, useState, Dispatch, SetStateAction, AnimationEvent } from "react";
import { Backdrop } from "../Backdrop/Backdrop";
import css from "./Modal.module.css";
import { Callback } from "../../../core/types/function/Callback";
import { Visibility } from "../../../core/code/Visibility";


const Modal: FC<ModalProps> = (props) => {

  if (props.status !== Visibility.NONE) {

    const classes = [ css.Modal, props.status === Visibility.SHOW ? css.ShowModal : css.HideModal ];
    const onAnimationStart = (e: AnimationEvent<HTMLDivElement>) => {
      if (e.animationName === css.ShowModalAnimation) (e.target as HTMLDivElement).style.display = "block";
    }
    const onAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
      if (e.animationName === css.HideModalAnimation) (e.target as HTMLDivElement).style.display = "none";
    }

    return (
      <Fragment key={props.status}>
        <Backdrop status={props.status} clicked={props.close} />
        <div className={classes.join("  ")}
             onAnimationStart={onAnimationStart}
             onAnimationEnd={onAnimationEnd}>
          { props.children }
        </div>
      </Fragment>
    );
  }

  return null;
}

interface ModalProps {
  status: Visibility;
  close: Callback;
}


export { Modal };
