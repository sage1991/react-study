import React, { Component } from "react";
import { Redirect } from "react-router-dom";


class Logout extends Component<LogoutProps> {
  componentDidMount = () => this.props.logout();
  render = () => <Redirect to="/sign" />;
}


interface LogoutProps {
  logout: () => void;
}

export { Logout };