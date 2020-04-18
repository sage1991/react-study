import React, { Component } from "react";
import CSS from "./App.css";
import People from "../components/People/People";
import Cockpit from "../components/Cockpit/Cockpit";

const initialPersonState = [
  { name: "Max", age: 14, id: "user01" },
  { name: "Manu", age: 16, id: "user02" },
  { name: "Anna", age: 28, id: "user03" },
];

class App extends Component {
  state = {
    persons: initialPersonState.map((e) => Object.assign({}, e)),
    showPersons: false,
  };

  render() {
    return (
      <div className={CSS.App}>
        <Cockpit
          persons={this.state.persons}
          onReset={this.resetHandler}
          onToggle={this.togglePersonHandler}
        />
        <People
          persons={this.state.persons}
          showPerson={this.state.showPersons}
          onSwitchAgeClick={this.switchAgeHandler}
          onDeleteClick={this.deletePersonHandler}
        />
      </div>
    );
    // return React.createElement('div', {className : "app"}, React.createElement('h1', null, 'Hello, React!'));
  }

  // [ Event Handlers ]
  togglePersonHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  switchAgeHandler = (index, num) => {
    const persons = [...this.state.persons];
    const person = Object.assign({}, this.state.persons[index]);
    person.age += num;
    persons[index] = person;
    this.setState({
      persons: persons,
    });
  };

  resetHandler = (e) => {
    this.setState({
      persons: initialPersonState.map((e) => Object.assign({}, e)),
    });
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons,
    });
  };
}

export default App;
