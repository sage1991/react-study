import { Component, ReactNode } from "react";
import { Provider } from "../../types/function/Provider";


class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {

  state: ErrorBoundaryState = {
    error: {
      didCatch: false,
      message: undefined
    }
  }

  static getDerivedStateFromError(error: Error) {
    return { error: { didCatch: true, message: error.message } };
  }

  render() {
    return this.state.error.didCatch ? this.props.fallbackProvider() : this.props.children;
  }

}

interface ErrorBoundaryProps {
  fallbackProvider: Provider<ReactNode>;
}

interface ErrorBoundaryState {
  error: { didCatch: boolean, message?: string };
}


export { ErrorBoundary };