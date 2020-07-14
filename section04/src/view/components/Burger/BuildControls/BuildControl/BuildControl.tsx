import React, { FC } from "react";
import css from "./BuildControl.module.css";
import { Callback } from "../../../../../core/types/function/Callback";

interface BuildControlProps {
  label: string;
  disabled: boolean
  added: Callback;
  removed: Callback;
}

const BuildControl:FC<BuildControlProps> = (props:BuildControlProps) => {
  return (
    <div className={css.BuildControl}>
      <div className={css.Label}>{props.label}</div>
      <button className={css.Less} onClick={props.removed} disabled={props.disabled}>less</button>
      <button className={css.More} onClick={props.added}>more</button>
    </div>
  );
};

export { BuildControl };