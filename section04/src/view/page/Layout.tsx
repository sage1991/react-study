import css from "./Layout.module.css";
import React, { Component, Fragment } from "react";
import SideDrawer from "../components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../components/Navigation/Toolbar/Toolbar";
import { StyleProps } from "../../core/types/interface/StyleProps";


class Layout extends Component<StyleProps, LayoutState> {

  state: LayoutState = {
    sideDrawer: {
      show: false,
    }
  }

  render() {
    return (
      <Fragment>
        <Toolbar drawerToggleClicked={this.toggleSideDrawer} />
        <SideDrawer show={this.state.sideDrawer.show} 
                    closed={this.closeSideDrawer} 
                    opened={this.openSideDrawer} />
        <main>
          <div className={css.Content}>
            {this.props.children}
          </div>
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