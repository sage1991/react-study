import React, { FC } from "react";
import css from "./Spinner.module.css";


const Spinner: FC = () => {
  return (
    <div className={css.Heart}>
      <div></div>
    </div>
  );
}

export { Spinner };