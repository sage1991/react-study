import React, { FC, AnimationEvent } from "react";
import css from "./Backdrop.module.css";
import { Visibility } from "../../../code/Visibility";
import { Callback } from "../../../types/function/Callback";
import { LayerLevel } from "../../../code/LayerLevel";


const Backdrop: FC<BackdropProps> = (props: BackdropProps) => {

  if (props.status !== Visibility.NONE) {
    
    const classes = [ css.backdrop, props.status === Visibility.SHOW ? css.show : css.hide ].join(" ");
    const onAnimationStart = (e: AnimationEvent<HTMLDivElement>) => {
      if (e.animationName === css.showBackdrop) (e.target as HTMLDivElement).style.display = "block";
    }
    const onAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
      if (e.animationName === css.hideBackdrop) (e.target as HTMLDivElement).style.display = "none";
    }

    return <div className={classes} 
                style={{ zIndex: props.level }}
                onClick={props.clicked}
                onAnimationStart={onAnimationStart}
                onAnimationEnd={onAnimationEnd}></div>;
  }

  return null;
};

interface BackdropProps {
  level: LayerLevel;
  status: Visibility;
  clicked : Callback;
}

export { Backdrop };
