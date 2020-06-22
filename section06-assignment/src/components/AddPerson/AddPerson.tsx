import React, { FC } from "react";
import css from "./AddPerson.module.css";


type AddPersonProps = {
  onClick: () => void;
}

const AddPerson: FC<AddPersonProps> = (props) => (
  <div className={css.AddPerson}>
    <button onClick={props.onClick}>Add Person</button>
  </div>
);

export { AddPerson };