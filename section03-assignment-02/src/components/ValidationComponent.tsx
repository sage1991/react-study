import React, { Component } from "react";


type ValidationComponentProperty = {
  textLength: number;
}

export default class ValidationComponent extends Component<ValidationComponentProperty> {

  render(): React.ReactNode {
    return <p>{this.props.textLength + " " + this.getMessage()}</p>;
  }

  getMessage(): string {
    if(this.props.textLength < 5) {
      return "text is too short...";
    } else {
      return "text is long enough..."
    }
  }
}