import css from "./Layout.module.css";
import React, { Component, Fragment } from "react";
import { StyleProps } from "../../core/types/interface/StyleProps";
import { Toolbar } from "../components/organism/toolbar/Toolbar";
import { UIContainer } from "../../core/container/ui/UIContainer";


class Layout extends Component<StyleProps, LayoutState> {

  state: LayoutState = {
    sideDrawer: {
      show: false,
    }
  }

  render() {
    return (
      <Fragment>
        <Toolbar />
        <UIContainer />
        <main className={css.content}>
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