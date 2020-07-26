import React, { FC } from "react";
import css from "./Toolbar.module.css";
import { Navigation } from "../../molecule/navigation/Navigation";
import Logo from "../../atom/logo/Logo";
import { Hamburger } from "../../atom/hamburger/Hamburger";
import { dispatch } from "../../../../core/store/Store";
import { UIActionBuilder } from "../../../../core/store/action/builder/UIActionBuilder";

const Toolbar: FC = () => {
  const navClasses = [ css.navigation, css.desktopOnly ];
  return (
    <header className={css.toolbar}>
      <Hamburger onClick={() => { dispatch(UIActionBuilder.showDrawer(<div>drawer</div>)) }} 
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