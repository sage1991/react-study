import React from "react";
import Person from "./Person/Person";

const People = (props) => {

  let style = {};
  if(props.showPerson) {
    style.display = "block";
  } else {
    style.display = "none";
  }

  return (
    <div style={style}>
    {props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          index={index}
          name={person.name}
          age={person.age}
          onSwitchAgeClick={props.onSwitchAgeClick}
          onDeleteClick={props.onDeleteClick}
        />
      );
    })}
  </div>
  );
}
  

export default People;
