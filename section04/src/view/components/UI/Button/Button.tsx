import React, { FC, ReactNode } from "react";
const style = require("./Button.css");

export enum ButtonType {
  Success = "Success",
  Danger = "Danger",
}

interface ButtonProps {
  buttonType : ButtonType;
  children?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const classList:string[] = [style.Button];
  classList.push(style[props.buttonType]);
  return (
    <button className={classList.join(" ")} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
