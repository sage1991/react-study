import React, { FC, Fragment, Children, cloneElement } from "react";
import { StyleProps } from "../../../types/interface/StyleProps";

const Margin: FC<MarginProps> = (props) => {

  const { style, className, ...rest } = props;

  const children = Children.map(props.children, (child) => {
    const childAsAny = child as any;
    let childStyle = { ...rest, ...style };
    let childClassName;
    if (childAsAny.props?.style) childStyle = { ...childAsAny.props.style};
    if (childAsAny.props?.className) childClassName = `${childAsAny.props.className} ${className ? ` ${className}`: ""}`
    return cloneElement(childAsAny, { style: childStyle, className: childClassName });
  });

  return <Fragment>{ children }</Fragment>;
}

interface MarginProps extends StyleProps {
  margin?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
}

export { Margin };