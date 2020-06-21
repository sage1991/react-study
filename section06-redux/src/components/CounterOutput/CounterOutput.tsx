import React, { FC } from 'react';
import css from "./CounterOutput.module.css";


type CounterOutputProps = {
  value: number;
}

const CounterOutput: FC<CounterOutputProps> = (props) => (
  <div className={css.CounterOutput}>
    Current Counter : {props.value}
  </div>
);

export { CounterOutput };