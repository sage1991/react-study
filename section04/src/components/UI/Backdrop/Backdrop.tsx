import React, { FC } from "react";
const style = require("./Backdrop.css");

interface BackdropProps {
  show: boolean;
  clicked : () => void;
}

const Backdrop: FC<BackdropProps> = (props: BackdropProps) => {
  return props.show ? (
    <div className={style.Backdrop} onClick={props.clicked}></div>
  ) : null;
};

export default Backdrop;
