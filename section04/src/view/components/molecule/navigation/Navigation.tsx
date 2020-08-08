import React, { FC } from "react";
import { NavigationItem } from "../../atom/navigation/NavigationItem";
import css from "./Navigation.module.css";

const Navigation: FC = () => {
  return (
    <ul className={css.navigation}>
      <NavigationItem link="/">Burger Builder</NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
      <NavigationItem link="/sign">sign-in</NavigationItem>
    </ul>
  )
}

export { Navigation };