import { StoreState } from "../../store/Store";
import { Dispatch } from "redux";
import { Action } from "../../store/action/Action";
import { UIAction } from "../../store/action/actionType/UIAction";
import { connect } from "react-redux";
import { UIContainer } from "../../component/organism/ui/UIContainer";

const mapStateToProps = (state: StoreState) => {
  return { uiState: state.ui };
}

const mapDispatchToProps = (dispatch: Dispatch<Action<UIAction>>) => {
  return {
    hideSnackbar: () => dispatch({ type: UIAction.HIDE_SNACKBAR, payload: null }),
    hideModal: () => dispatch({ type: UIAction.HIDE_MODAL, payload: null }),
    removePopup: (id: number) => dispatch({ type: UIAction.REMOVE_POPUP, payload: id }),
    removeToast: (id: number) => dispatch({ type: UIAction.REMOVE_TOAST, payload: id })
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);
const UIContainerWithUIState = connectToStore(UIContainer);

export { UIContainerWithUIState as UIContainer };