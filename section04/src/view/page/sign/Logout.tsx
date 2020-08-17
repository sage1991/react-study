import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withAuth } from "../../hoc/withAuth/WithAuth";


class Logout extends Component<LogoutProps> {
  componentDidMount = () => this.props.logout();
  render = () => <Redirect to="/sign" />;
}


interface LogoutProps {
  logout: () => void;
}

const LogoutWithAuth = withAuth(Logout);
export { LogoutWithAuth as Logout };