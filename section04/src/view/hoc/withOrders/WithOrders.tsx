import React, { ComponentType, Component } from "react";
import { Spinner } from "../../../core/component/atom/spinner/Spinner";
import { MainAxisAlignment } from "../../../core/code/flex/MainAxisAlignment";
import { CrossAxisAlignment } from "../../../core/code/flex/CrossAxisAlignment";
import { FlexView } from "../../../core/component/atom/flex/FlexView";
import { ThunkDispatch } from "redux-thunk";
import { StoreState } from "../../../core/store/Store";
import { OrderAction } from "../../../core/store/action/type/OrderAction";
import { Callback } from "../../../core/types/function/Callback";
import { OrderActionBuilder } from "../../../core/store/action/builder/OrderActionBuilder";
import { connect } from "react-redux";



const mapDispatchToProps = (dispatch: ThunkDispatch<StoreState, null, OrderAction>) => {
  return {
    getOrders: (success: Callback, fail: Callback) => dispatch(OrderActionBuilder.getOrders(success, fail)),
  }
}

const connector = connect(null, mapDispatchToProps);


const withOrders = <P extends Object> (WrappedComponent: ComponentType<P>) => {

  const ComponentWithOrders = class extends Component<P & WithOrdersProps, WithOrderState> {
    
    state = { spinner: { show: true } };
    
    componentDidMount() {
      this.props.getOrders(this.success, this.fail);
    }

    render() {
      if (this.state.spinner.show) return <FlexView mainAxisAlignment={MainAxisAlignment.CENTER} crossAxisAlignment={CrossAxisAlignment.CENTER}><Spinner /></FlexView>;
      const { getOrders, ...rest } = this.props;
      return <WrappedComponent {...rest as P} />;
    }

    private success = () => {
      this.setState({ spinner: { show: false } });
    }

    private fail = (error: any) => {
      throw new Error("fail to fetch orders from server");
    }
  }

  return connector(ComponentWithOrders as any);
}


interface WithOrdersProps {
  getOrders: (success: Callback, fail: Callback) => void
}

interface WithOrderState {
  spinner: { show: boolean };
}

export { withOrders };