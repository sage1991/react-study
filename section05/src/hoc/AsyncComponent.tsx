import React, { Component, ComponentType } from "react";
import { Optional } from "../core/Types";

// lazy loading
interface AsyncComponentState {
  component: Optional<ComponentType>;
}

const AsyncComponent = (importComponent:() => Promise<any>) => {
  
  return class extends Component<{}, AsyncComponentState> {

    state: AsyncComponentState = {
      component : null
    }

    componentDidMount() {
      importComponent()
      .then(comp => {
        console.log(comp);
        this.setState({
          component: comp.default
        });
      });
    }

    render() {
      const Comp = this.state.component;
      return Comp ? <Comp {...this.props} /> : null;
    }
  }
}

export default AsyncComponent;