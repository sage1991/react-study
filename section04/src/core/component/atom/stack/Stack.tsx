import React, { Fragment, FC, Children, cloneElement } from "react";
import { LayerLevel } from "../../../code/common/LayerLevel";


const Stack: FC<StackProps> = (props) => {
  
  const children = Children.map(props.children, (child, index) => {
    const style = { ...(child as any).props.style, zIndex: props.level + index };
    return cloneElement(child as any, { key: index, style: style });
  });

  return (
    <Fragment>
      { children }
    </Fragment>
  );
}

interface StackProps {
  level: LayerLevel;
}

export { Stack };