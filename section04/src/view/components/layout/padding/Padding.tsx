import React, { FC, Children, ReactElement, Fragment } from "react";
import { PropsInjector } from "../../propsInjector/PropsInjector";


const Padding: FC<PaddingProps> = (props) => {
  Children.only(props.children);
  
  const inject = {
    style: {
      padding: props.padding,
      paddingLeft: props.paddingLeft,
      paddingRight: props.paddingRight,
      paddingTop: props.paddingTop,
      paddingBottom: props.paddingBottom
    },
    className: props.className
  };

  return <PropsInjector inject={inject}>{ props.children }</PropsInjector>;
}


interface PaddingProps {
  padding?: number;
  paddingLeft?:number;
  paddingRight?:number;
  paddingTop?:number;
  paddingBottom?:number;
  className?: string;
}


export { Padding };

