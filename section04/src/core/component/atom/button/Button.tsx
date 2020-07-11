import React, { FC, EventHandler, MouseEvent, useState } from "react";
import css from "./Button.module.css";
import { StyleProps } from "../../../types/interface/StyleProps";
import { ButtonStatus } from "../../../code/button/ButtonStatus";
import { ButtonStyle } from "../../../types/data/ButtonStyle";
import { ButtonType } from "../../../code/button/ButtonType";


const Button: FC<ButtonProps> = (props) => {
  
  const { buttonStyle, ...rest } = props;
  const [ state, setState ] = useState<ButtonState>({ status: props.disabled ? ButtonStatus.DISABLED : ButtonStatus.NORMAL });
  const onTouchStart = () => setState({ status: ButtonStatus.TOUCH_START });
  const onTouchEnd = () => setState({ status: ButtonStatus.TOUCH_END });

  const classes = [ css.button ];
  if (props.className) classes.push(props.className);
  if (!props.disabled) {
    switch (state.status) {
      case ButtonStatus.TOUCH_START : 
        if (buttonStyle?.touchStart) classes.push(buttonStyle.touchStart);
        break;
      case ButtonStatus.TOUCH_END :
        if (buttonStyle?.touchEnd) classes.push(buttonStyle.touchEnd);
        break;
    }
  }
  

  return (
    <button { ...rest } 
            className={classes.join(" ")} 
            onTouchStart={onTouchStart} 
            onTouchEnd={onTouchEnd}>
      { props.children }
    </button>
  );
}

interface ButtonProps extends StyleProps {
  type?: ButtonType;
  onClick?: EventHandler<MouseEvent<HTMLButtonElement>>;
  disabled?: boolean;
  buttonStyle?: ButtonStyle;
}

interface ButtonState {
  status: ButtonStatus;
}

export { Button };