import React, { FC, Children, ReactElement, Fragment } from "react";


const PropsInjector: FC<PropsInjectorProps> = (props) => {
  return (
    <Fragment>
      {
        Children.map(props.children, child => React.cloneElement(child as ReactElement, props.inject))
      }
    </Fragment>
  );
}


interface PropsInjectorProps {
  inject: any;
}


export { PropsInjector };