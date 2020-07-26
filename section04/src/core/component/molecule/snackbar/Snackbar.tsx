import React, { FC, MouseEvent, AnimationEvent } from "react";
import css from "./Snackbar.module.css";
import { FlexView } from "../../atom/flex/FlexView";
import { Expand } from "../../atom/flex/expand/Expand";
import { MainAxisAlignment } from "../../../code/flex/MainAxisAlignment";
import { CrossAxisAlignment } from "../../../code/flex/CrossAxisAlignment";
import { FlexWrap } from "../../../code/flex/FlexWrap";
import { Callback } from "../../../types/function/Callback";
import { Visibility } from "../../../code/common/Visibility";

const Snackbar: FC<SnackbarProps> = (props) => {
  
  if (props.status !== Visibility.NONE) {
    const classes = [ css.snackbar, props.status === Visibility.SHOW ? css.show : css.hide ];
    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
      props.onClick();
    }
    const onAnimationStart = (e: AnimationEvent<HTMLDivElement>) => {
      if (e.animationName === css.showSnackbar) (e.target as HTMLDivElement).style.display = "block";
    }
    const onAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
      if (e.animationName === css.hideSnackbar) (e.target as HTMLDivElement).style.display = "none";
    }

    return (
      <div key={props.status} 
           className={classes.join(" ")} 
           onAnimationStart={onAnimationStart} 
           onAnimationEnd={onAnimationEnd}>
        <FlexView mainAxisAlignment={MainAxisAlignment.SPACE_AROUND} 
                  crossAxisAlignment={CrossAxisAlignment.STRETCH} 
                  wrap={FlexWrap.SINGLE_LINE}>
          <Expand ratio={1}>
            <p className={css.message}>
              { props.children }
            </p>
          </Expand>
          <button className={css.button} onClick={onClick}>{ props.button ?? "확인" }</button>
        </FlexView>
      </div>
    );
  } else {
    return null;
  }
}


interface SnackbarProps {
  onClick: Callback;
  button?: string;
  status: Visibility;
}


export { Snackbar };