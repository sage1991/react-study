import React, { FC } from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
const style = require("./NavigationItems.css");

const NavigationItems: FC = (props) => {
  return (
    <ul className={style.NavigationItems}>
      <NavigationItem link={"/"}>Burger&nbsp;Builder</NavigationItem>
      <NavigationItem link={"/orders"}>Orders</NavigationItem>
    </ul>
  );
};


export default NavigationItems;
