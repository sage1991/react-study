import React, { Component } from "react";
import "./App.css";
import CharComponent from "./components/CharComponent";
import ValidationComponent from "./components/ValidationComponent";

type AppState = {
  userInputText: string;
};

class App extends Component<{}, AppState> {
  state: AppState = {
    userInputText: "",
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.onChange.bind(this)}
          value={this.state.userInputText}
        />
        <p>{this.state.userInputText}</p>
        <ValidationComponent textLength={this.state.userInputText.length} />
        {this.generateCharComponent()}
      </div>
    );
  }

  generateCharComponent(): React.ReactNode[] {
    return this.state.userInputText
      .split("")
      .map((char: string, index: number) => (
        <CharComponent
          key={index}
          index={index}
          char={char}
          onClick={this.onCharComponentClick.bind(this)}
        />
      ));
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      userInputText: e.target.value,
    });
  }

  onCharComponentClick(index: number) {
    const newCharListState = this.state.userInputText.split("");
    newCharListState.splice(index, 1);
    this.setState({
      userInputText: newCharListState.join(""),
    });
  }
}

export default App;
