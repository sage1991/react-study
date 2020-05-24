import React, { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
const style = require("./NavigationItem.css");

interface NavigationItemProps {
  children: ReactNode;
  link:string;
}

const NavigationItem:FC<NavigationItemProps> = (props) => {
  return (
    <li className={style.NavigationItem}>
      <NavLink 
        to={props.link} 
        exact
        activeClassName={style.active}>
        {props.children}
      </NavLink>
    </li>
  );
}


export default NavigationItem;