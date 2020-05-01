import React, { Component, Fragment } from "react";
import PropTypes from "prop-types"
import CSS from "./Person.css";
import WithClass from "../../../hoc/WithClass";
import AuthContext from "../../../context/AuthContext"


// const Person = (props) => {

//   console.log("Person.js -> render");
//   const [nameState, setNameState] = useState({
//     name: props.name,
//   });
//   const onClick = (num, e) => {
//     props.onSwitchAgeClick(props.index, num);
//   };
//   const onChange = (e) => {
//     setNameState({
//       name: e.target.value,
//     });
//   };
//   const onDeleteClick = (e) => {
//     props.onDeleteClick(props.index);
//   };

//   const style = {
//     position: "absolute",
//     top: "5px",
//     right: "5px",
//     backgroundColor: "red",
//     color: "white",
//     border: "none",
//   };

//   return (
//     <div className={CSS.Person}>
//       <p>
//         <b>name</b> : {nameState.name}, <b>age</b> : {props.age}
//       </p>
//       <p>
//         name :
//         <input
//           type="text"
//           placeholder="name"
//           value={nameState.name}
//           onChange={onChange}
//         />
//       </p>
//       <p>
//         age :<button onClick={onClick.bind(this, 1)}>+</button>
//         <button onClick={onClick.bind(this, -1)}>-</button>
//       </p>
//       <button style={style} onClick={onDeleteClick}>
//         X
//       </button>
//       {props.children}
//     </div>
//   );
// };

class Person extends Component {
  state = {
    name: this.props.name,
  };

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.nameInputRef = React.createRef();
  }


  render() {
    console.log("[ Person.js ] - render");

    const style = {
      position: "absolute",
      top: "5px",
      right: "5px",
      backgroundColor: "red",
      color: "white",
      border: "none",
    };

    return (
      <Fragment>
        {/* <AuthContext.Consumer>
          {
            (context) => context.authenticated ? <p>Authentuicated!!</p> : <p>please login</p>
          }
        </AuthContext.Consumer> */}
        {
          this.context.authenticated ? <p>Authentuicated!!</p> : <p>please login</p>
        }
        <p>
          <b>name</b> : {this.state.name}, <b>age</b> : {this.props.age}
        </p>
        <p>
          name :
          <input
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.onChange}
            ref={this.nameInputRef}
          />
        </p>
        <p>
          age :<button onClick={this.onClick.bind(this, 1)}>+</button>
          <button onClick={this.onClick.bind(this, -1)}>-</button>
        </p>
        <button style={style} onClick={this.onDeleteClick}>
          X
        </button>
        {this.props.children}
      </Fragment>
    );
  }

  onClick = (num, e) => {
    this.props.onSwitchAgeClick(this.props.index, num);
  };

  onChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onDeleteClick = (e) => {
    this.props.onDeleteClick(this.props.index);
  };

  // update life cycle

  // static getDerivedStateFromProps(props, state) {
  //   console.log("[ Person.js ] - getDrivedStateFromProps", props, state);
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log("[ Person.js ] - componentWillReceiveProps", props);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[ Person.js ] - shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[ Person.js ] - getSnapshotBeforeUpdate");
    return { message: "snapshot" };
  }

  // componentWillUpdate() {
  //   console.log("[ Person.js ] - componentWillUpdate");
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[ Person.js ] - componentDidUpdate", snapshot);
    this.nameInputRef.current.focus();
  }

  componentWillUnmount() {
    console.log("[ Person.js ] - componentWillUnmount");
  }

  componentDidMount() {
    this.nameInputRef.current.focus();
  }
}

Person.propTypes = {
  name : PropTypes.string,
  age : PropTypes.number,
}

// export default Radium(Person);
export default WithClass(Person, CSS.Person);
