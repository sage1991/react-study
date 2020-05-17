import React, { ReactNode, Fragment, Component } from "react";
import Backdrop from "../Backdrop/Backdrop";
const style = require("./Modal.css");

interface ModalProps {
  children?: ReactNode;
  show: boolean;
  modalClosed: () => void;
}

export default class Modal extends Component<ModalProps> {

  shouldComponentUpdate(nextProps:ModalProps, nextState:{}) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  render() {
    return (
      <Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={style.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}>
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}
