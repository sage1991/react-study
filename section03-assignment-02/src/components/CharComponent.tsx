import React, { Component, CSSProperties } from "react";


type CharComponentProps = {
  char:string;
  index:number;
  onClick:(index:number) => void;
}

export default class CharComponent extends Component<CharComponentProps> {

  render(): React.ReactNode {
    const style:CSSProperties = {
      display : "inline-block",
      padding : "16px",
      textAlign : "center",
      margin : "16px",
      border : "1px solid black"
    };
    return <span style={style} onClick={this.onClick.bind(this)}>{this.props.char}</span>;
  }

  onClick(e: React.MouseEvent<HTMLSpanElement>) {
    this.props.onClick(this.props.index);
  }
}
