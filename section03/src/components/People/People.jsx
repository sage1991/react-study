import React, { PureComponent } from "react";
import Person from "./Person/Person";

// const People = (props) => {
//   console.log("People.js -> render");

//   let style = {};
//   if (props.showPerson) {
//     style.display = "block";
//   } else {
//     style.display = "none";
//   }

//   return (
//     <div style={style}>
//       {props.persons.map((person, index) => {
//         return (
//           <Person
//             key={person.id}
//             index={index}
//             name={person.name}
//             age={person.age}
//             onSwitchAgeClick={props.onSwitchAgeClick}
//             onDeleteClick={props.onDeleteClick}
//           />
//         );
//       })}
//     </div>
//   );
// };

class People extends PureComponent {
  
  render() {
    const style = {};
    if (this.props.showPerson) {
      style.display = "block";
    } else {
      style.display = "none";
    }

    return (
      <div style={style}>
        {this.props.persons.map((person, index) => {
          return (
            <Person
              key={person.id}
              index={index}
              name={person.name}
              age={person.age}
              onSwitchAgeClick={this.props.onSwitchAgeClick}
              onDeleteClick={this.props.onDeleteClick}
            />
          );
        })}
      </div>
    );
  }
}

export default People;
