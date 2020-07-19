import React, { FC, EventHandler, FocusEvent, ChangeEvent, KeyboardEvent } from "react";
import css from "./Input.module.css";
import { StyleProps } from "../../../types/interface/StyleProps";
import { InputStatus } from "../../../code/input/InputStatus";
import { InputStyle } from "../../../types/data/InputStyle";
import { InputType } from "../../../code/input/InputType";

const Input: FC<InputProps> = (props) => {

  const { inputStyle, status, ...rest } = props;
  const classes = [ css.input ];
  
  if (props.className) classes.push(props.className);
  if (props.secured) classes.push(css.secured);
  
  switch (status) {
    case InputStatus.INVALID :
      if (inputStyle?.invalid) classes.push(inputStyle.invalid);
      break;
    case InputStatus.VALID : default :
      if (inputStyle?.valid) classes.push(inputStyle.valid);
      break;
  }

  return <input { ...rest } className={classes.join(" ")} />;
}


interface InputProps extends StyleProps {
  name: string;
  value?: string;
  placeholder?: string;
  type?: InputType;
  onChange?: EventHandler<ChangeEvent<HTMLInputElement>>;
  onKeyup?: EventHandler<KeyboardEvent<HTMLInputElement>>;
  onFocus?: EventHandler<FocusEvent<HTMLInputElement>>;
  onBlur?: EventHandler<FocusEvent<HTMLInputElement>>;
  status?: InputStatus;
  inputStyle?: InputStyle;
  secured?: boolean;
}

export { Input };