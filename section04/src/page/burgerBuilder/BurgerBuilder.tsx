import React, { Component, Fragment } from "react";
import { Modal } from "../../components/UI/Modal/Modal";
import { DefaultProps } from "../../core/common/types/interface/DefaultProps";
import { BackdropAndModalStatus } from "../../core/common/code/BackdropAndModalStatus";


class BurgerBuilder extends Component<DefaultProps, BurgerBuilderState> {

  state: BurgerBuilderState = {
    modal: {
      status: BackdropAndModalStatus.NONE
    }
  }

  render() {
    return (
      <Fragment>
        <Modal 
          status={this.state.modal.status}
          close={this.closeModal}>
          <h1>Hello World!</h1>
        </Modal>
        burger
        BuildControl
        <button onClick={this.showModal}>sdfasdf</button>
      </Fragment>
    );
  }

  private closeModal = () => {
    this.setState({ modal: { status: BackdropAndModalStatus.HIDE } });
  }

  private showModal = () => {
    this.setState({ modal: { status: BackdropAndModalStatus.SHOW } });
  }
  
}

interface BurgerBuilderState {
  modal: { status: BackdropAndModalStatus };
}

export { BurgerBuilder };