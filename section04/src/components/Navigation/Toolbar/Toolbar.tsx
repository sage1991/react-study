import React, { FC } from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
const style = require("./Toolbar.css");


const Toolbar:FC = (props) => {
  return (
    <header className={style.Toolbar}>
      <div>MENU</div>
      <Logo></Logo>
      <nav>
        <NavigationItems></NavigationItems>
      </nav>
    </header>
  );
}

export default Toolbar;