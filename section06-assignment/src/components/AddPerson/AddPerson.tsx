import React, { FC, useState, ChangeEvent, MouseEvent } from "react";
import css from "./AddPerson.module.css";
import { PersonModel, PersonModelBuilder } from "../../core/model/PersonModel";


type AddPersonProps = {
  onClick: (person: PersonModel) => void;
}

type AddPersonState = {
  name: string;
  age: number;
}

const AddPerson: FC<AddPersonProps> = (props) => {
  
  const [ state, setState ] = useState<AddPersonState>({ name: "", age: 0 });
  
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updated = { [ e.target.name ] : e.target.name === "age" ? + e.target.value : e.target.value };
    setState({
      ...state,
      ...updated
    });
  }

  const onClick = (e: MouseEvent) => {
    const person = new PersonModelBuilder().id(Date.now())
                                            .age(state.age)
                                            .name(state.name)
                                            .build();
    props.onClick(person);
    setState({ name: "", age: 0 });
  }

  return (
    <div className={css.AddPerson}>
      <input type="text" name="name" placeholder="name" value={state.name} onChange={onChange} />
      <input type="number" name="age" placeholder="age" value={state.age ? state.age : ""} onChange={onChange} />
      <button onClick={onClick}>Add Person</button>
    </div>
  )
};

export { AddPerson };