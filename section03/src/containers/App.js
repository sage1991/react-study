import React, { Component } from "react";
import CSS from "./App.css";
import People from "../components/People/People";
import Cockpit from "../components/Cockpit/Cockpit";
import AuthContext from "../context/AuthContext";

/**
 * [ Component creation lifecycle ]
 * 1. constructor(props)
 *   - you should call "super(props);" here
 * 2. static getDerivedStateFromProps(props, state)
 *   - you should return state
 * 3. render()
 * 4. componentWillMount() <- deprecated
 * 5. componentDidMount()
 *   - you can call side effect here(like http request...)
 *   - but do not call setState syncronously in this method
 *     that will cause unnecessary rendering
 */

/**
 * [ Component update lifecycle ]
 * 1. static getDerivedStateFromProps(props, state)
 *   - sync state to props
 * 2. shouldComponentUpdate(nextProp, nextState)
 *   - you may cancel updating process
 * 3. render
 * 4. getSnapshotBeforeUpdate(prevProps, prevState)
 * 5. commponentDidUpdate()
 *   - call side effect
 */

const initialPersonState = [
  { name: "Max", age: 14, id: "user01" },
  { name: "Manu", age: 16, id: "user02" },
  { name: "Anna", age: 28, id: "user03" },
];

class App extends Component {
  state = {
    persons: initialPersonState.map((e) => Object.assign({}, e)),
    showPersons: false,
    showCockpit: true,
    resetCounter: 0,
    authenticated : false,
  };

  constructor(props) {
    super(props);
    console.log("App.js -> constructor");
    // this.state = {
    //   persons: initialPersonState.map((e) => Object.assign({}, e)),
    //   showPersons: false,
    // };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("App.js -> getDerivedStateFromProps", props);
    return state;
  }

  toggleCockpit = () => {
    this.setState({
      showCockpit: !this.state.showCockpit,
    });
  };

  loginHandler = () => {
    this.setState({
      authenticated : true
    });
  }


  render() {
    console.log("App.js -> render");
    return (
      <div className={CSS.App}>
        <button onClick={this.toggleCockpit}>toggle cockpit</button>
        <AuthContext.Provider value={{
          authenticated : this.state.authenticated,
          login : this.loginHandler
        }}>
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              personsLength={this.state.persons.length}
              onReset={this.resetHandler}
              onToggle={this.togglePersonHandler}
            />
          ) : null}
          <People
            persons={this.state.persons}
            showPerson={this.state.showPersons}
            onSwitchAgeClick={this.switchAgeHandler}
            onDeleteClick={this.deletePersonHandler}
          />
        </AuthContext.Provider>
      </div>
    );
    // return React.createElement('div', {className : "app"}, React.createElement('h1', null, 'Hello, React!'));
  }

  // componentWillMount() {
  //   console.log("App.js -> componentWillMount");
  // }

  componentDidMount() {
    console.log("App.js -> componentDidMount");
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
    // this.setState({
    //   persons: initialPersonState.map((e) => Object.assign({}, e)),
    //   resetCounter : this.state.resetCounter + 1
    // });

    // next state 가 prev state의 영향을 받을 경우, setState에 Object 대신 함수를 넘길것!
    // 이렇게 하면 react가 prev state의 상태가 개발자가 의도한 이전 상태인 것을 보장 해 줌..
    this.setState((prevState, props) => {
      return {
        persons: initialPersonState.map((e) => Object.assign({}, e)),
        resetCounter: prevState.resetCounter + 1,
      };
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
