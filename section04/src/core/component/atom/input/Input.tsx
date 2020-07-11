import React, { FC, EventHandler, KeyboardEvent, FocusEvent } from "react";
import css from "./Input.module.css";
import { StyleProps } from "../../../types/interface/StyleProps";
import { InputStatus } from "../../../code/input/InputStatus";
import { InputStyle } from "../../../types/data/InputStyle";
import { InputType } from "../../../code/input/InputType";

const Input: FC<InputProps> = (props) => {

  const { inputStyle, status, ...rest } = props;
  const classes = [ css.input ];
  
  if (props.className) classes.push(props.className);
  if (props.type === InputType.SECURED_NUMBER) {
    classes.push(css.secured);
    props.type = InputType.TEL;
  }
  
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
  placeholder?: string;
  type?: InputType;
  onKeyUp?: EventHandler<KeyboardEvent<HTMLInputElement>>;
  onFocus?: EventHandler<FocusEvent<HTMLInputElement>>;
  onBlur?: EventHandler<FocusEvent<HTMLInputElement>>;
  status?: InputStatus;
  inputStyle?: InputStyle;
}

export { Input };