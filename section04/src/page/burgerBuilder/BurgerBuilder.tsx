import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";
import { BurgerModel } from "../../core/common/model/BurgerModel";
import Modal from "../../components/UI/Modal/Modal";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import { PriceModel } from "../../core/common/model/PriceModel";
import { WithPrice } from "../../hoc/withPrice/WithPrice";


class BurgerBuilder extends Component<BurgerBuilderProps, BurgerBuilderState> {

  state: BurgerBuilderState = {
    modal: {
      show: false
    }
  }

  render() {
    return (
      <Fragment>
        <Modal 
          show={this.state.modal.show}
          modalClosed={this.closeModal}>
          {}
        </Modal>
        <Burger model={this.props.burger} />
        <BuildControls burger={this.props.burger}/>
      </Fragment>
    );
  }

  private closeModal = () => {
    this.setState({ modal: { show: false } });
  }
  
}


interface BurgerBuilderProps {
  burger: BurgerModel;
}

interface BurgerBuilderState {
  modal: { show: boolean };
}

const BurgerBuilderWithPrice = WithPrice(BurgerBuilder)

export { BurgerBuilderWithPrice };