import React, { FC } from "react";
import css from "./Toolbar.module.css";
import { Navigation } from "../../molecule/navigation/Navigation";
import Logo from "../../atom/logo/Logo";
import { Hamburger } from "../../atom/hamburger/Hamburger";
import { dispatch } from "../../../../core/store/Store";
import { UIAction } from "../../../../core/store/action/actionType/UIAction";

const Toolbar: FC = () => {
  const navClasses = [ css.navigation, css.desktopOnly ];
  return (
    <header className={css.toolbar}>
      <Hamburger onClick={() => { dispatch({ type: UIAction.SHOW_DRAWER, payload: <div>drawer</div> }) }} 
                 className={css.drawerButton}/>
      <div className={css.logo}>
        <Logo />
      </div>
      <nav className={navClasses.join(" ")}>
        <Navigation />
      </nav>
    </header>
  );
}

export { Toolbar };