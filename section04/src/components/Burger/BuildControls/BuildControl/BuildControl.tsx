import React, { FC } from "react";

const style = require("./BuildControl.css");


interface BuildControlProps {
  label : string;
}

const BuildControl:FC<BuildControlProps> = (props:BuildControlProps) => {
  return (
    <div className={style.BuildControl}>
      <div className={style.Label}>{props.label}</div>
      <button className={style.Less}>less</button>
      <button className={style.More}>more</button>
    </div>
  );
};

export default BuildControl;