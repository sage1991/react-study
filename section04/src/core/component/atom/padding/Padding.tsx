import React, { FC, Fragment, Children, cloneElement } from "react";
import { StyleProps } from "../../../types/interface/StyleProps";

const Padding: FC<PaddingProps> = (props) => {
  
  const { style, className, ...rest } = props;
  
  const children = Children.map(props.children, (child) => {
    const childAsAny = child as any;
    let style = { ...rest };
    let childClassName = className;
    if (childAsAny.props?.style) style = { ...childAsAny.props.style};
    if (childAsAny.props?.className) childClassName = `${childAsAny.props.className}${className ? ` ${className}`: ""}`
    return cloneElement(childAsAny, { style: style, className: childClassName });
  });

  return <Fragment>{ children }</Fragment>;
}

interface PaddingProps extends StyleProps {
  padding?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;
}

export { Padding };