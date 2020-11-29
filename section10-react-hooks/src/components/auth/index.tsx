import React, { FC, useContext } from "react";
import "./Auth.css";
import { Card } from "../UI/Card";
import { AuthContext } from "../../context/auth-context";


export const Auth:FC = props => {
  const authContext = useContext(AuthContext);
  const handleLogin = () => authContext.login();

  return (
    <div className="auth">
      <Card>
        <h2>You are not authenticated!</h2>
        <p>please log in to continue.</p>
        <button onClick={handleLogin}>Log in</button>
      </Card>
    </div>
  )
}