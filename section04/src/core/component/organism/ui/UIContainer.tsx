import React, { Component, Fragment, cloneElement } from "react";
import { Snackbar } from "../../molecule/snackbar/Snackbar";
import { UIState } from "../../../store/reducer/UIReducer";
import { Modal } from "../../molecule/modal/Modal";
import { Callback } from "../../../types/function/Callback";
import { LayerLevel } from "../../../code/common/LayerLevel";
import { PopupStack } from "../../molecule/popup/stack/PopupStack";
import { ToastQueue } from "../../molecule/toast-queue/ToastQueue";


class UIContainer extends Component<UIContainerProps> {

  render() {
    const { modal, popups, snackbar, toasts } = this.props.uiState;
    return (
      <Fragment>
        <PopupStack level={LayerLevel.FULL_POPUP} >
          { popups.map(popup => cloneElement(popup.node as any, { removeFromStack: this.props.removePopup })) }
        </PopupStack>
        <Modal status={modal.status} close={this.props.hideModal}>
          { modal.node }
        </Modal>
        <Snackbar button={snackbar.button} onClick={this.onSnackbarClick} status={snackbar.status}>
          { snackbar.message }
        </Snackbar>
        <ToastQueue toast={toasts.map(toast => toast.node)} remove={this.props.removeToast} />
      </Fragment>
    );
  }

  private onSnackbarClick = () => {
    this.props.uiState.snackbar.onClick();
    this.props.hideSnackbar();
  }

}

interface UIContainerProps {
  uiState: UIState;
  hideSnackbar: Callback;
  hideModal: Callback;
  removePopup: Callback;
  removeToast: Callback;
}

export { UIContainer };
