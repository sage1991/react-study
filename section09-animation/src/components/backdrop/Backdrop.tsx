import React, { FC } from "react";
import css from "./Backdrop.module.css";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionClassNames } from "react-transition-group/CSSTransition";


const classNames: CSSTransitionClassNames = {
  enter: css.fadeEnter,
  enterActive: css.fadeEnterActive,
  enterDone: css.fadeEnterDone,
  exit: css.fadeExit,
  exitActive: css.fadeExitActive,
  exitDone: css.fadeExitDone,
}

const Backdrop: FC<BackdropProps> = (props) => (
  <CSSTransition
    in={props.show}
    timeout={300}
    classNames={classNames}
    mountOnEnter
    unmountOnExit>
      <div className={css.backdrop}></div>
  </CSSTransition>
)

interface BackdropProps {
  show?: boolean;
}

export { Backdrop };