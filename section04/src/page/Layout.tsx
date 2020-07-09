import css from "./Layout.module.css";
import React, { Component, Fragment } from "react";
import SideDrawer from "../components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../components/Navigation/Toolbar/Toolbar";
import { DefaultProps } from "../core/common/types/interface/DefaultProps";


class Layout extends Component<DefaultProps, LayoutState> {

  state: LayoutState = {
    sideDrawer: {
      show: false,
    }
  }

  render() {
    return (
      <Fragment>
        <SideDrawer 
          show={this.state.sideDrawer.show} 
          closed={this.closeSideDrawer} 
          opened={this.openSideDrawer} />
        <Toolbar drawerToggleClicked={this.toggleSideDrawer} />
        <main className={css.Content}>
          {this.props.children}
        </main>
      </Fragment>
    );
  }


  private openSideDrawer = () => {
    this.setState({ sideDrawer: { show: true } });
  }

  private closeSideDrawer = () => {
    this.setState({ sideDrawer: { show: false } });
  }

  private toggleSideDrawer = () => {
    this.setState(prevState => {
      return { ...prevState, sideDrawer: { show: !prevState.sideDrawer.show } };
    });
  }

}


interface LayoutState {
  sideDrawer: { show: boolean };
}


export { Layout };