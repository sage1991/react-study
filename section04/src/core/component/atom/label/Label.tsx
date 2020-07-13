import React, { FC } from "react";
import css from "./Label.module.css";
import { StyleProps } from "../../../types/interface/StyleProps";


const Label: FC<LabelProps> = (props) => {
  const classes = [ css.label ];
  if (props.className) classes.push(props.className);
  return (
    <div className={classes.join(" ")} style={props.style}>
      { props.children }
      { props.required ? <span className={css.required}>&nbsp;*</span> : null }
    </div>
  );
}

interface LabelProps extends StyleProps {
  required?: boolean;
}

export { Label };