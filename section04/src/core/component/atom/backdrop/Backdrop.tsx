import React, { FC, AnimationEvent, MouseEvent, useRef } from "react";
import css from "./Backdrop.module.css";
import { Visibility } from "../../../code/common/Visibility";
import { Callback } from "../../../types/function/Callback";
import { LayerLevel } from "../../../code/common/LayerLevel";


const Backdrop: FC<BackdropProps> = (props) => {
  
  const divRef = useRef<HTMLDivElement>(null);

  if (props.status !== Visibility.NONE) {
    
    const classes = [ css.backdrop, props.status === Visibility.SHOW ? css.show : css.hide ].join(" ");
    const onAnimationStart = (e: AnimationEvent<HTMLDivElement>) => {
      if (e.animationName === css.showBackdrop) (e.target as HTMLDivElement).style.display = "block";
    }
    const onAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
      if (e.animationName === css.hideBackdrop) (e.target as HTMLDivElement).style.display = "none";
    }
    const onClick = (e: MouseEvent<HTMLDivElement>) => {
      if (e.target === divRef.current) props.clicked();
    }

    return (
      <div ref={divRef}
           className={classes} 
           style={{ zIndex: props.level }}
           onClick={onClick}
           onAnimationStart={onAnimationStart}
           onAnimationEnd={onAnimationEnd}>
        {props.children}
      </div>
    );
  }
  return null;
};


interface BackdropProps {
  level: LayerLevel;
  status: Visibility;
  clicked : Callback;
}

export { Backdrop };
