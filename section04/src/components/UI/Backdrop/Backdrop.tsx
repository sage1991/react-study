import React, { FC, AnimationEvent } from "react";
import css from "./Backdrop.module.css";
import { Callback } from "../../../core/types/function/Callback";
import { Visibility } from "../../../core/code/Visibility";


const Backdrop: FC<BackdropProps> = (props: BackdropProps) => {

  if (props.status !== Visibility.NONE) {
    
    const classes = [ css.Backdrop, props.status === Visibility.SHOW ? css.ShowBackdrop : css.HideBackdrop ].join(" ");
    const onAnimationStart = (e: AnimationEvent<HTMLDivElement>) => {
      if (e.animationName === css.ShowBackdropAnimation) (e.target as HTMLDivElement).style.display = "block";
    }
    const onAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
      if (e.animationName === css.HideBackdropAnimation) (e.target as HTMLDivElement).style.display = "none";
    }

    return <div className={classes} 
                onClick={props.clicked}
                onAnimationStart={onAnimationStart}
                onAnimationEnd={onAnimationEnd}></div>;
  }

  return null;
};

interface BackdropProps {
  status: Visibility;
  clicked : Callback;
}

export { Backdrop };
