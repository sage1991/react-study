import React, { CSSProperties } from "react";
import "./UserOutput.css";


type UserOutputProps = {
  userName: string;
};

const titleStyle:CSSProperties = {
  fontWeight : "bold",
  fontSize : "1.5em",
  marginBottom : "10px"
};

const UserOutput: React.FC<UserOutputProps> = (props) => {


  return (
    <div className="UserOutput">
      <p style={titleStyle}>{props.userName}</p>
      <p>-- user output contents here --</p>
    </div>
  );
};
export default UserOutput;
