import { StoreState } from "../../store/Store";
import { Dispatch } from "redux";
import { Action } from "../../store/action/Action";
import { UIActionType } from "../../store/action/type/UIAction";
import { connect } from "react-redux";
import { UIContainer } from "../../component/organism/ui/UIContainer";
import { UIActionBuilder } from "../../store/action/builder/UIActionBuilder";

const mapStateToProps = (state: StoreState) => {
  return { uiState: state.ui };
}

const mapDispatchToProps = (dispatch: Dispatch<Action<UIActionType>>) => {
  return {
    hideSnackbar: () => dispatch(UIActionBuilder.hideSnackbar()),
    hideModal: () => dispatch(UIActionBuilder.hideModal()),
    removePopup: (id: number) => dispatch(UIActionBuilder.removePopup(id)),
    removeToast: (id: number) => dispatch(UIActionBuilder.removeToast(id)),
    closeDrawer: () => dispatch(UIActionBuilder.hideDrawer())
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);
const UIContainerWithUIState = connectToStore(UIContainer);

export { UIContainerWithUIState as UIContainer };