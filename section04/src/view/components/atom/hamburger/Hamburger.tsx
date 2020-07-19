import React, { FC } from "react";
import css from "./Hamburger.module.css";
import { Callback } from "../../../../core/types/function/Callback";
import { StyleProps } from "../../../../core/types/interface/StyleProps";

const Hamburger: FC<HamburgerProps> = (props) => {
  const classes = [ css.hamburger ];
  if (props.className) classes.push(props.className);
  return (
    <div className={classes.join(" ")}
         style={props.style} 
         onClick={props.onClick}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
};

interface HamburgerProps extends StyleProps {
  onClick: Callback;
}

export { Hamburger };