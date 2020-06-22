import React, { FC } from "react";
import { PersonModel, PersonModelBuilder } from "../core/model/PersonModel";
import { AddPerson } from "./AddPerson/AddPerson";
import { Person } from "./Person/Person";


type PeopleProps = {
  people: PersonModel[];
  onPersonAdd: (person: PersonModel) => void;
  onPersonDelete: (person: PersonModel) => void;
}


const People: FC<PeopleProps> = (props) => (
  <div>
    <AddPerson onClick={() => { props.onPersonAdd(generateRandomPerson()); }} />
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


function generateRandomPerson() {
  return new PersonModelBuilder().id(Date.now())
                                  .age(Math.floor(Math.random() * 40))
                                  .name("harry kane")
                                  .build();
}



export { People };