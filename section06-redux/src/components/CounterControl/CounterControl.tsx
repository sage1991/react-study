import React, { FC } from 'react';
import css from "./CounterControl.module.css";


type CounterControlProps = {
  label: string;
  onClick: () => void;
}

const CounterControl: FC<CounterControlProps> = (props) => (
  <div className={css.CounterControl} onClick={props.onClick}>
    {props.label}
  </div>
);

export { CounterControl };