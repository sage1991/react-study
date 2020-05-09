import React, { FC } from "react";
import css from "./DrawerToggle.module.css";

interface DrawerToggleProps {
  onClick : () => void;
}


const DrawerToggle:FC<DrawerToggleProps> = (props) => {
  return (
    <div className={css.DrawerToggle} onClick={props.onClick}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default DrawerToggle;