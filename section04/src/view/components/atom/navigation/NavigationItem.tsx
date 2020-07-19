import React, { FC } from "react";
import css from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";


const NavigationItem: FC<NavigationItemProps> = (props) => {
  return (
    <li className={css.navigationItemWrap}>
      <NavLink exact to={props.link} className={css.navigationItem} activeClassName={css.active}>{ props.children }</NavLink>
    </li>
  );
}

interface NavigationItemProps {
  link: string;
}

export { NavigationItem };