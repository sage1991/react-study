import React, { Fragment, FC, Children, cloneElement } from "react";
import { LayerLevel } from "../../../../code/common/LayerLevel";


const PopupStack: FC<PopupStackProps> = (props) => {
  const children = Children.map(props.children, (child, index) => {
    return cloneElement(child as any, { key: index, level: props.level + index });
  });
  return (
    <Fragment>
      { children }
    </Fragment>
  );
}

interface PopupStackProps {
  level: LayerLevel;
}

export { PopupStack };