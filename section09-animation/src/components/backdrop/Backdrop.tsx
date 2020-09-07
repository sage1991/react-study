import React, { FC } from "react";
import css from "./Backdrop.module.css";

const Backdrop: FC<BackdropProps> = (props) => {
  const classes = [ css.backdrop, props.show ? css.open : css.close ];
  return <div className={classes.join(" ")}></div>
}

interface BackdropProps {
  show?: boolean;
}

export { Backdrop };