import React, { FC, ChangeEvent } from "react";
import css from "./Input.module.css";
import { InputConfig, SelectConfig } from "../../../containers/Checkout/ContactData/ContectData";

export enum InputType {
  Input,
  Textarea,
  Select,
}

interface InputProps {
  label: string;
  value?: string;
  inputType?: InputType;
  elementConfig?: InputConfig | SelectConfig;
  onChange?: (e:ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const Input: FC<InputProps> = (props) => {

  let inputElement;
  switch (props.inputType) {
    case InputType.Input :
      inputElement = (
        <input 
          className={css.InputElement} 
          onChange={props.onChange} 
          {...props.elementConfig} />
      );
      break;
    case InputType.Textarea :
      inputElement = (
        <textarea 
          className={css.InputElement} 
          onChange={props.onChange} 
          {...props.elementConfig} />
      );
      break;
    case InputType.Select : 
      const options = (props.elementConfig && "option" in props.elementConfig) ? props.elementConfig["option"] : [];
      inputElement = (
        <select 
          className={css.InputElement} 
          onChange={props.onChange} 
          {...props.elementConfig}>
          {
            options.map(option => {
              return (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              );
            })
          }
        </select>
      );
      break;
    default :
      inputElement = <input className={css.InputElement} {...props.elementConfig} />;
  }

  return (
    <div className={css.Input}>
      <label className={css.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
}

export default Input;