import React, { ComponentType, Component, Fragment } from "react";
import { Modal } from "../../components/UI/Modal/Modal";
import { AxiosInstance } from "axios";
import { Visibility } from "../../core/code/Visibility";




interface WithErrorHandlerState {
  error : Error | null;
}

const WithErrorHandler = <P extends object> (WrappedComponent: ComponentType<P>, axios: AxiosInstance)
: ComponentType<P> => {

  return class extends Component<P, WithErrorHandlerState> {

    requestInterceptor: number;
    responseInterceptor: number;
    state : WithErrorHandlerState = {
      error : null
    };

    componentWillMount() {
      this.registerInterceptor();
    }


    componentWillUnmount() {
      this.removeInterceptor()
    }

    private removeInterceptor() {
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);
    }

    private registerInterceptor() {
      this.requestInterceptor = axios.interceptors.request.use(request => {
        this.setState({
          error : null
        });
        return request;
      });

      this.responseInterceptor = axios.interceptors.response.use(response => response, error => {
        this.setState({
          error : error
        });
        return Promise.reject(error);
      });
    }

    errorConfirmedHandler = () => {
      this.setState({error : null});
    }

    render() {
      return (
        <Fragment>
          <Modal 
            status={Visibility.NONE}
            close={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props}></WrappedComponent>
        </Fragment>
      );
    }

  }

};


export default WithErrorHandler;