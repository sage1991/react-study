import React, { Fragment, Component } from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import { autoBind } from "../../core/AutoBind";
const style = require("./Layout.css");


interface LayoutState {
  showSideDrawer:boolean;
}

export default class Layout extends Component<{}, LayoutState> {
  
  state = {
    showSideDrawer : false
  }

  @autoBind
  sideDrawerClosedHandler() {
    this.setState({
      showSideDrawer : false
    });
  }

  @autoBind
  sideDrawerOpenedHandler() {
    this.setState({
      showSideDrawer : true
    });
  }

  @autoBind
  sideDrawerToggleHandler() {
    this.setState((prevState) => {
      return {
        showSideDrawer : !prevState.showSideDrawer
      }
    });
  }
  
  render() {
    return (
      <Fragment>
        <SideDrawer 
          show={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
          opened={this.sideDrawerOpenedHandler} />
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <div>toolbar, slideDrawer, backdrop</div>
        <main className={style.content}>{this.props.children}</main>
      </Fragment>
    );
  }


}
