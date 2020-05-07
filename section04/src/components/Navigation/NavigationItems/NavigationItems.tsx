import React, { FC } from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
const style = require("./NavigationItems.css");

const NavigationItems: FC = (props) => {
  return (
    <ul className={style.NavigationItems}>
      <NavigationItem isActive={true} link={"/burger/builder"}>Burger&nbsp;Builder</NavigationItem>
      <NavigationItem isActive={false} link={"/burger/checkout"}>Checkout</NavigationItem>
    </ul>
  );
};


export default NavigationItems;
