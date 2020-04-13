import React, { useState } from "react";
import "./Person.css"

const Person = (props) => {
  
  const [nameState, setNameState] = useState({
    name : props.name
  });

  const onClick = (num, e) => {
    props.onClick(props.index, num);
  };

  const onChange = (e) => {
    setNameState({
      name : e.target.value
    });
  }

  return (
    <div className="Person">
      <p>
        <b>name</b> : {nameState.name}, <b>age</b> : {props.age}
      </p>
      <p>
        name : 
          <input type="text" placeholder="name" value={nameState.name} onChange={onChange}/>
      </p>
      <p>
        age : 
        <button onClick={onClick.bind(this, 1)}>+</button>
        <button onClick={onClick.bind(this, -1)}>-</button>
      </p>
      {props.children}
    </div>
  );
};

export default Person;
