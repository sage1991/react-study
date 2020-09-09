import React, { FC } from "react";
import css from "./Modal.module.css";
import Transition from "react-transition-group/Transition";


const Modal: FC<ModalProps> = (props) => (
  <Transition 
    in={props.show} 
    timeout={300} 
    mountOnEnter 
    unmountOnExit
    onEnter={() => console.log("onEnter")}
    onEntering={() => console.log("onEntering")}
    onEntered={() => console.log("onEntered")}
    onExit={() => console.log("onExit")}
    onExiting={() => console.log("onExiting")}
    onExited={() => console.log("onExited")}>
    {status => {
      const classes = [ css.modal ];
      if (status === "entering") classes.push(css.open);
      else if (status === "exiting") classes.push(css.close);

      return (
        <div className={classes.join(" ")}>
          <h1>A Modal</h1>
          <button className="button" onClick={props.close}>Dismiss</button>
        </div>
      )
    }}
  </Transition>
);

interface ModalProps {
  close?: () => void;
  show?: boolean;
}


export { Modal };