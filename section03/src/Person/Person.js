import React, { useState } from "react";
// import Radium from "radium";
import styled from "styled-components";
import "./Person.css";

// styled-components
const StyledDiv = styled.div`
  {
    margin: 20px auto;
    width: 90%;
    border : 1px solid #eee;
    box-shadow: 0px 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    transition: background-color 0.5s;
    position: relative;
  }
  @media (min-width: 500px) {
    width: 450px;
  }
`;

const Person = (props) => {
  const [nameState, setNameState] = useState({
    name: props.name,
  });

  const onClick = (num, e) => {
    props.onClick(props.index, num);
  };

  const onChange = (e) => {
    setNameState({
      name: e.target.value,
    });
  };

  const onDeleteClick = (e) => {
    props.onDeleteClick(props.index);
  };

  const style = {
    position: "absolute",
    top: "5px",
    right: "5px",
    backgroundColor: "red",
    color: "white",
    border: "none",
  };

  const divStyle = {
    "@media(min-width: 500px)": {
      width: "450px",
    },
  };

  return (
    // <div className="Person" style={divStyle}>
    <StyledDiv>
      <p>
        <b>name</b> : {nameState.name}, <b>age</b> : {props.age}
      </p>
      <p>
        name :
        <input
          type="text"
          placeholder="name"
          value={nameState.name}
          onChange={onChange}
        />
      </p>
      <p>
        age :<button onClick={onClick.bind(this, 1)}>+</button>
        <button onClick={onClick.bind(this, -1)}>-</button>
      </p>
      <button style={style} onClick={onDeleteClick}>
        X
      </button>
      {props.children}
    </StyledDiv>
  );
};

// export default Radium(Person);
export default Person;
