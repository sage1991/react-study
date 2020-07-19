import React, { FC } from "react";
import css from "./BuildControl.module.css";
import { Callback } from "../../../../../core/types/function/Callback";


const BuildControl: FC<BuildControlProps> = (props) => {
  return (
    <div className={css.buildControl}>
      <div className={css.label}>{ props.label }</div>
      <button className={css.remove} onClick={props.remove} disabled={!props.removable}> - </button>
      <button className={css.add} onClick={props.add} disabled={!props.addable}> + </button>
    </div>
  );
}

interface BuildControlProps {
  label: string;
  remove: Callback;
  add: Callback;
  addable: boolean;
  removable: boolean;
}

export { BuildControl };