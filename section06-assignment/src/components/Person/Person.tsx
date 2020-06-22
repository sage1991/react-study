import React, { FC } from "react";
import css from "./Person.module.css";


type PersonProps = {
  onClick: () => void;
  name: string;
  age: number;
}


const Person: FC<PersonProps> = (props) => (
  <div className={css.Person} onClick={props.onClick}>
    <h1>{props.name}</h1>
    <p>Age: {props.age}</p>
  </div>
);



export { Person };