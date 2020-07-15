import React, { FC, Fragment } from "react";
import css from "./Scaffold.module.css";

const Scaffold: FC<ScaffoldProps> = (props) => {
  return (
    <Fragment>
      <div className={css.scaffold}>
        <div>tool bar</div>
        <div>body</div>
        <div>bottom navigation</div>
        <div>side drawer</div>
      </div>
    </Fragment>
  );
}

interface ScaffoldProps {

}

export { Scaffold };