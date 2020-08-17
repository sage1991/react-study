import React, { ComponentType, Component } from "react";
import { Provider } from "../../types/function/Provider";



const lazyLoadComponent = (name: string, lazyLoader: Provider<Promise<any>>) => {

  return class extends Component<any, LazyLoadComponentState> {
    
    state: LazyLoadComponentState = { component: null };

    componentDidMount() {
      this.importComponent();
    }

    render() {
      const AsyncComponent = this.state.component;
      if (AsyncComponent) return <AsyncComponent {...this.props} />;
      return null;
    }

    private importComponent = async () => {
      const module = await lazyLoader();
      console.log(module);
      this.setState({ component: module[name] });
    }

  }
}

interface LazyLoadComponentState {
  component: ComponentType | null;
}

export { lazyLoadComponent };