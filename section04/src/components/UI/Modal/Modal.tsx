import React, { FC, ReactNode, Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";
const style = require("./Modal.css");

interface ModalProps {
  children?: ReactNode;
  show: boolean;
  modalClosed : () => void;
}

const Modal: FC<ModalProps> = (props: ModalProps) => {
  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed}/>
      <div className={style.Modal} style={{
        transform:props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity : props.show ? "1" : "0"
      }}>{props.children}</div>
    </Fragment>
    );
};

export default Modal;
