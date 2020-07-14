import React, { FC, Children, Fragment, ReactElement } from "react";
import { PropsInjector } from "../../propsInjector/PropsInjector";


const Margin: FC<MarginProps> = (props) => {
  Children.only(props.children);
  const inject = {
    style: {
      margin: props.margin,
      marginRight: props.marginRight,
      marginLeft: props.marginLeft,
      marginTop: props.marginTop,
      marginBottom: props.marginBottom
    },
    className: props.className
  };
  return <PropsInjector inject={inject}>{ props.children }</PropsInjector>;
}


interface MarginProps {
  margin?: number;
  marginLeft?:number;
  marginRight?:number;
  marginTop?:number;
  marginBottom?:number;
  className?: string;
}


export { Margin };