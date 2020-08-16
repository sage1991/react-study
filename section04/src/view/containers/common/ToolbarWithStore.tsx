import { StoreState } from "../../../core/store/Store";
import { connect } from "react-redux";
import { Toolbar } from "../../components/organism/toolbar/Toolbar";
import { Dispatch } from "redux";
import { UIActionBuilder } from "../../../core/store/action/builder/UIActionBuilder";
import { ReactNode } from "react";


const mapStateToProps = (state: StoreState) => {
  return {
    auth: state.sign.auth,
    drawerStatus: state.ui.drawer.status,
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    showDrawer: () => dispatch(UIActionBuilder.showDrawer()),
    hideDrawer: () => dispatch(UIActionBuilder.hideDrawer()),
    setDrawer: (drawer: ReactNode) => dispatch(UIActionBuilder.setDrawer(drawer)),
  }
}

const ToolbarWithStore = connect(mapStateToProps, mapDispatchToProps)(Toolbar);
export { ToolbarWithStore };