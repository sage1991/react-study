import React, { FC } from "react"
import { FlexView } from "./FlexView";
import { MainAxisAlignment } from "../../../code/flex/MainAxisAlignment";
import { CrossAxisAlignment } from "../../../code/flex/CrossAxisAlignment";
import { StyleProps } from "../../../types/interface/StyleProps";


const Center: FC<CenterProps> = (props) => {
  return (
    <FlexView 
      className={props.className} 
      style={props.style} 
      mainAxisAlignment={MainAxisAlignment.CENTER} 
      crossAxisAlignment={CrossAxisAlignment.CENTER}>
      { props.children }
    </FlexView>
  );
}

interface CenterProps extends StyleProps {

}

export { Center }