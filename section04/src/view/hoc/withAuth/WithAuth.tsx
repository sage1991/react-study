import React, { ComponentType, FC } from "react";
import { StoreState } from "../../../core/store/Store";
import { AuthModel } from "../../../business/model/AuthModel";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


const mapStateToProps = (state: StoreState) => {
  return {
    auth: state.sign.auth
  }
}

const withAuth = <P extends Object> (WrappedComponent: ComponentType<P>) => {
  const WithAuthComponent: FC<P & WithAuthComponentProps> = (props) => {
    if (!props.auth.token) return <Redirect to="/" />
    return <WrappedComponent {...props} />;
  }
  return connect(mapStateToProps)(WithAuthComponent as any);
}

interface WithAuthComponentProps {
  auth: AuthModel;
}

export { withAuth };