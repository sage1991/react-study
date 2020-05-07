import React, { FC, ReactNode } from "react";
const style = require("./NavigationItem.css");

interface NavigationItemProps {
  children: ReactNode;
  link:string;
  isActive:boolean;
}

const NavigationItem:FC<NavigationItemProps> = (props) => {
  return (
    <li className={style.NavigationItem}>
      <a href={props.link} className={props.isActive ? style.active : null}>
        {props.children}
      </a>
    </li>
  );
}


export default NavigationItem;