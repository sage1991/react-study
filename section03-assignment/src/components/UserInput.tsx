import React, { ChangeEvent, CSSProperties } from "react";

type UserInputProps = {
  onUserNameChange: (name: string) => void;
  userName: string;
};

const inputStype: CSSProperties = {
  display : "inline-box",
  width : "40%",
  height : "30px",
  margin : "10px",
  padding : "10px",
  fontSize : "1em",
  color : "#777",
  border : "none",
  borderBottom : "2px solid black"
};

const UserInput: React.FC<UserInputProps> = (props) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onUserNameChange(e.target.value);
  };
  return <input style={inputStype} type="text" onChange={onChange} value={props.userName} />;
};
export default UserInput;
