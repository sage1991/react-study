import React, { FC } from "react";
import css from "./Modal.module.css";


const Modal: FC<ModalProps> = (props) => {
  const classes = [ css.modal, props.show ? css.open : css.close ];

  return (
    <div className={classes.join(" ")}>
      <h1>A Modal</h1>
      <button className="button" onClick={props.close}>Dismiss</button>
    </div>
  )
}

interface ModalProps {
  close?: () => void;
  show?: boolean;
}


export { Modal };