import React, { Component } from "react";
// import React, { useState } from "react";  // react hooks
import "./App.css";
import Person from "./Person/Person";

const initialPersonState = [
  { name: "Max", age: 14 },
  { name: "Manu", age: 16 },
  { name: "Anna", age: 28 },
];


class App extends Component {
  state = {
    persons: initialPersonState.map(e => Object.assign({}, e)),
  };

  render() {

    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>Hello, React!</h1>
        <p>this is react app.</p>
        <button style={style} onClick={this.resetHandler}>reset</button>
        {this.renderPerson()}
      </div>
    );
    // return React.createElement('div', {className : "app"}, React.createElement('h1', null, 'Hello, React!'));
  }

  renderPerson() {
    let persons = [];
    for (let i = 0; i < this.state.persons.length; i++) {
      persons.push(
        <Person
          key={i}
          index={i}
          name={this.state.persons[i].name}
          age={this.state.persons[i].age}
          onClick={this.switchAgeHandler}
        />
      );
    }
    return persons;
  }

  switchAgeHandler = (index, num) => {
    let persons = [...this.state.persons];
    persons[index].age += num;
    this.setState({
      persons: persons,
    });
  };

  resetHandler = (e) => {
    this.setState({
      persons : initialPersonState.map(e => Object.assign({}, e)),
    });
  }
}

// react hooks
/* 
const App = props => {

  const [personState, setPersonState] = useState({
    persons: [
      { name: "Max", age: 14 },
      { name: "Manu", age: 16 },
      { name: "Anna", age: 28 },
    ],
    //otherState : "this is other state"
  });
  const [otherState, setOtherState] = useState({
    otherState : "this is other state"
  });

  const switchNameHandler = (e) => {
    // # NOTE : react hook setstate replcae entire old state to new state!!!
    setPersonState({
      persons : [
        { name: "Harry", age: 14 },
        { name: "Manu", age: 16 },
        { name: "Anna", age: 28 },
      ]
    });
  }

  console.log(personState);

  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <p>this is react app.</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age} />
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />
    </div>
  );
}
 */

export default App;
