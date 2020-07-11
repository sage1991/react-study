import React, { FC } from "react";
import css from "./FlexView.module.css";
import { StyleProps } from "../../../types/interface/StyleProps";
import { FlexDirection } from "../../../code/flex/FlexDirection";
import { MainAxisAlignment } from "../../../code/flex/MainAxisAlignment";
import { CrossAxisAlignment } from "../../../code/flex/CrossAxisAlignment";
import { MultiLineBehavior } from "../../../code/flex/MultiLineBehavior";
import { FlexWrap } from "../../../code/flex/FlexWrap";



const FlexView: FC<FlexViewProps> = (props) => {
  
  const { direction, mainAxisAlignment, crossAxisAlignment, multiLineBehavior, wrap, ...rest } = props;
  
  const classes = [ css.flex ];
  if (props.className) classes.push(props.className);
  const directionClass = direction ? css[direction] : css[FlexDirection.ROW];
  const mainAxisAlignmentClass = mainAxisAlignment ? css[mainAxisAlignment] : css[MainAxisAlignment.FLEX_START];
  const crossAxisAlignmentClass = crossAxisAlignment ? css[crossAxisAlignment] : css[CrossAxisAlignment.CENTER];
  const wrapClass = wrap ? css[wrap] : css[FlexWrap.SINGLE_LINE];
  classes.push(directionClass);
  classes.push(mainAxisAlignmentClass);
  classes.push(crossAxisAlignmentClass);
  classes.push(wrapClass);
  if (props.multiLineBehavior) classes.push(css[props.multiLineBehavior]);

  return (
    <div 
      { ...rest }
      className={classes.join(" ")}>
      { props.children }
    </div>
  )
} 


interface FlexViewProps extends StyleProps {
  direction?: FlexDirection;
  mainAxisAlignment?: MainAxisAlignment;
  crossAxisAlignment?: CrossAxisAlignment;
  multiLineBehavior?: MultiLineBehavior;
  wrap?: FlexWrap;
}

export { FlexView };