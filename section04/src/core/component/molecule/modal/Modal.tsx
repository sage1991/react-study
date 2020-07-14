import React, { FC, AnimationEvent } from "react";
import css from "./Modal.module.css";
import { Backdrop } from "../../atom/backdrop/Backdrop";
import { Visibility } from "../../../code/common/Visibility";
import { Callback } from "../../../types/function/Callback";
import { LayerLevel } from "../../../code/common/LayerLevel";


const Modal: FC<ModalProps> = (props) => {

  if (props.status !== Visibility.NONE) {

    const classes = [ css.modal, props.status === Visibility.SHOW ? css.show : css.hide ];
    const onAnimationStart = (e: AnimationEvent<HTMLDivElement>) => {
      if (e.animationName === css.showModal) (e.target as HTMLDivElement).style.display = "block";
    }
    const onAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
      if (e.animationName === css.hideModal) (e.target as HTMLDivElement).style.display = "none";
    }

    return (
      <Backdrop key={props.status} status={props.status} clicked={props.close} level={LayerLevel.MODAL}>
        <div className={classes.join("  ")}
             onAnimationStart={onAnimationStart}
             onAnimationEnd={onAnimationEnd} >
          { props.children }
        </div>
      </Backdrop>
    );
  }

  return null;
}

interface ModalProps {
  status: Visibility;
  close: Callback;
}

export { Modal };
