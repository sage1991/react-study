import React, { Component, ReactNode } from "react";
import css from "./Toolbar.module.css";
import { Navigation } from "../../molecule/navigation/Navigation";
import Logo from "../../atom/logo/Logo";
import { Hamburger } from "../../atom/hamburger/Hamburger";
import { AuthModel } from "../../../../business/model/AuthModel";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Visibility } from "../../../../core/code/common/Visibility";

class Toolbar extends Component<ToolbarProps> {
  
  componentDidMount() {
    this.props.setDrawer(<Navigation auth={this.props.auth} />);
  }

  componentDidUpdate(prevProps: ToolbarProps) {
    if (
      prevProps.location !== this.props.location
      && prevProps.drawerStatus === Visibility.SHOW
    ) {
      this.props.hideDrawer();
    }
  }

  render() {
    const navClasses = [ css.navigation, css.desktopOnly ];
    return (
      <header className={css.toolbar}>
        <Hamburger onClick={this.props.showDrawer} 
                  className={css.drawerButton}/>
        <div className={css.logo}>
          <Logo />
        </div>
        <nav className={navClasses.join(" ")}>
          <Navigation auth={this.props.auth} />
        </nav>
      </header>
    );
  }
}

interface ToolbarProps extends RouteComponentProps {
  showDrawer: () => void;
  hideDrawer: () => void;
  setDrawer: (drawer: ReactNode) => void;
  auth: AuthModel;
  drawerStatus: Visibility;
}

const ToolbarWithRouter = withRouter(Toolbar);
export { ToolbarWithRouter as Toolbar };