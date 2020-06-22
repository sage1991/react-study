import React, { FC } from "react";
import { PersonModel } from "../core/model/PersonModel";
import { AddPerson } from "./AddPerson/AddPerson";
import { Person } from "./Person/Person";


type PeopleProps = {
  people: PersonModel[];
  onPersonAdd: (person: PersonModel) => void;
  onPersonDelete: (person: PersonModel) => void;
}


const People: FC<PeopleProps> = (props) => (
  <div>
    <AddPerson onClick={(person: PersonModel) => { props.onPersonAdd(person); }} />
    {
      props.people.map(person => (
        <Person 
          key={person.id} 
          age={person.age} 
          name={person.name} 
          onClick={() => { props.onPersonDelete(person); }} />
      ))
    }
  </div>
);

export { People };