import React, { FC, useState, AnimationEvent, Children, cloneElement } from "react";
import css from "./Popup.module.css";
import { PopupProps as InjectedPopupProps } from "../../../types/interface/PopupProps";
import { LayerLevel } from "../../../code/common/LayerLevel";
import { Visibility } from "../../../code/common/Visibility";
import { Callback } from "../../../types/function/Callback";


const Popup: FC<PopupProps> = (props) => {

  const [ state, setState ] = useState<PopupState>({ status: Visibility.SHOW });
  const classes = [ css.popup, state.status === Visibility.SHOW ? css.show : css.hide ];
  const style = { zIndex: props.level ?? LayerLevel.FULL_POPUP };
  
  const onAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === css.hidePopup && typeof props.removeFromStack === "function") {
      props.removeFromStack(props.id);
    }
  }
  const closePopup = () => {
    setState({ status: Visibility.HIDE });
  }

  const children = Children.map(props.children, child => {
    const popupProps: InjectedPopupProps = { popup: { id: props.id, close: closePopup } };
    return cloneElement(child as any, popupProps);
  });

  return (
    <div className={classes.join(" ")} style={style} onAnimationEnd={onAnimationEnd}>
      { children }
    </div>
  );
}

interface PopupProps {
  id: number;
  removeFromStack?: Callback;
  level?: number;
}

interface PopupState {
  status: Visibility;
}


export { Popup };