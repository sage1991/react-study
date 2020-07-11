import React, { Children, FC, CSSProperties, cloneElement, Fragment } from "react";

const Expand: FC<ExpandProps> = (props) => {
  
  try {
    Children.only(props.children);
  } catch(e) {
    throw new Error("FlexItem must have single child");
  }
  
  const ratio = props.ratio ?? 0;
  const style: CSSProperties = {
    flex: ratio,
    msFlex: ratio,
    WebkitFlex: ratio,
    WebkitBoxFlex: ratio,
    MozBoxFlex: ratio,
  };

  const child = Children.map(props.children, (child) => {
    let childAsAny = child as any;
    let childStyle: CSSProperties = {};
    if (childAsAny.props?.style) childStyle = { ...childAsAny.props.style };
    return cloneElement(childAsAny, { style: { ...style, ...childStyle } });
  });

  return <Fragment>{ child }</Fragment>;
}

interface ExpandProps {
  ratio?: number;
}

export { Expand };