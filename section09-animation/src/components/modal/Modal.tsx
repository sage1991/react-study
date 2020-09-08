import React, { FC } from "react";
import css from "./Modal.module.css";
import { TransitionStatus } from "react-transition-group/Transition";


const Modal: FC<ModalProps> = (props) => {
  const classes = [ css.modal ];
  if (props.show === "entering") classes.push(css.open);
  else if (props.show === "exiting") classes.push(css.close);

  return (
    <div className={classes.join(" ")}>
      <h1>A Modal</h1>
      <button className="button" onClick={props.close}>Dismiss</button>
    </div>
  )
}

interface ModalProps {
  close?: () => void;
  show?: TransitionStatus;
}


export { Modal };