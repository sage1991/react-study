import React, { Component } from "react";
// import Radium from "radium";
// import React, { useState } from "react";  // react hooks
// import styled from "styled-components";
import Classes from "./App.css";
import Person from "./Person/Person";

// styled component
// const StyledButton = styled.button`
//   {
//     background-color : ${props => props.alt ? "#555" : "white"};
//     font : inherit;
//     border : 1px solid blue;
//     border-radius : 3px;
//     padding : 8px;
//     cursor : pointer;
//     margin : 5px;
//   }
//   ${props => props.alt ? "" : `
//     &:hover {
//       background-color : blue;
//       color : white;
//     }
//   `}
// `;

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

    // const style = {
    //   backgroundColor: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   borderRadius: "3px",
    //   padding: "8px",
    //   cursor: "pointer",
    //   margin: "5px",
    //   ":hover": {
    //     backgroundColor: "blue",
    //     color: "white",
    //   },
    // };

    return (
      <div className={Classes.App}>
        <h1>Hello, React!</h1>
        <p>this is react app.</p>
        {/* 
        <StyledButton alt={this.state.persons.length === 0} onClick={this.togglePersonHandler}>toggle</StyledButton>
        <StyledButton onClick={this.resetHandler}>reset</StyledButton> 
        */}
        {/* 
        <button key="1" style={style} onClick={this.togglePersonHandler}>
          toggle
        </button>
        <button key="2" style={style} onClick={this.resetHandler}>
          reset
        </button> 
        */}
        <button onClick={this.togglePersonHandler}>
          toggle
        </button>
        <button className={Classes.reset} onClick={this.resetHandler}>
          reset
        </button>
        {this.state.showPersons ? this.renderPerson() : null}
      </div>
    );
    // return React.createElement('div', {className : "app"}, React.createElement('h1', null, 'Hello, React!'));
  }

  renderPerson() {
    return this.state.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          index={index}
          name={person.name}
          age={person.age}
          onClick={this.switchAgeHandler}
          onDeleteClick={this.deletePersonHandler}
        />
      );
    });
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

// export default Radium(App);
export default App;
