import React, { FC } from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle";
const style = require("./Toolbar.css");

interface ToolbarProps {
  drawerToggleClicked : () => void;
}


const Toolbar:FC<ToolbarProps> = (props) => {
  return (
    <header className={style.Toolbar}>
      <DrawerToggle onClick={props.drawerToggleClicked} />
      <div className={style.Logo}>
        <Logo />
      </div>
      <nav className={style.DesktopOnly}>
        <NavigationItems ></NavigationItems>
      </nav>
    </header>
  );
}

export default Toolbar;