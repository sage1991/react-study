import React, { FC } from "react";
import { NavigationItem } from "../../atom/navigation/NavigationItem";
import css from "./Navigation.module.css";
import { AuthModel } from "../../../../business/model/AuthModel";

const Navigation: FC<NavigationProps> = (props) => {
  return (
    <ul className={css.navigation}>
      <NavigationItem link="/">Burger Builder</NavigationItem>
      {
        props.auth.token
        ? <NavigationItem link="/orders">Orders</NavigationItem>
        : null
      }
      {
        props.auth.token
        ? <NavigationItem link="/logout">log-out</NavigationItem>
        : <NavigationItem link="/sign">sign-in</NavigationItem>
      }
      
    </ul>
  )
}

interface NavigationProps {
  auth: AuthModel;
}

export { Navigation };