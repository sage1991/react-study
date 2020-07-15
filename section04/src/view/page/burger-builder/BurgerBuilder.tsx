import React, { Component, Fragment } from "react";
import css from "./BurgerBuilder.module.css";
import { BurgerWithStore } from "../../containers/burger/BurgerWithStore";
import { BuildControlsWithStore } from "../../containers/burger/BuildControlsWithStore";
import { Button } from "../../../core/component/atom/button/Button";
import { dispatch } from "../../../core/store/Store";
import { UIAction } from "../../../core/store/action/actionType/UIAction";
import { Toast } from "../../../core/component/atom/toast/Toast";
import { Visibility } from "../../../core/code/common/Visibility";
import { ToastPayload } from "../../../core/store/action/payload/UIPayload";


class BurgerBuilder extends Component<{}, BurgerBuilderState> {

  state: BurgerBuilderState = {}

  render() {
    return (
      <Fragment>
        <BurgerWithStore />
        <BuildControlsWithStore onPurchase={this.onPurchase} />
        <Button onClick={this.showToast}>toast</Button>
      </Fragment>
    );
  }

  private onPurchase = () => {
    alert("on purchase");
  }

  private showToast = () => {
    const payload: ToastPayload = { id: Date.now(), node: <Toast>hello!!</Toast> };
    dispatch({ type: UIAction.ADD_TOAST, payload: payload });
  }

  private showModal = () => {

  }

  private showSnackbar = () => {

  }

  private openPopup = () => {

  }

  private closePopup = () => {

  }

}

interface BurgerBuilderState {
  
}

export { BurgerBuilder };