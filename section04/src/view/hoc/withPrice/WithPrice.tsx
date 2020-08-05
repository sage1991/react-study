import React, { ComponentType, Component } from "react"
import { Spinner } from "../../../core/component/atom/spinner/Spinner";
import { StoreState } from "../../../core/store/Store";
import { FlexView } from "../../../core/component/atom/flex/FlexView";
import { MainAxisAlignment } from "../../../core/code/flex/MainAxisAlignment";
import { CrossAxisAlignment } from "../../../core/code/flex/CrossAxisAlignment";
import { BurgerActionBuilder } from "../../../core/store/action/builder/BurgerActionBuilder";
import { ThunkDispatch } from "redux-thunk";
import { Callback } from "../../../core/types/function/Callback";
import { BurgerAction } from "../../../core/store/action/type/BurgerAction";
import { connect } from "react-redux";
import { PriceModel } from "../../../business/model/PriceModel";


const mapStateToProps = (state: StoreState) => {
  return {
    price: state.burger.price
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<StoreState, null, BurgerAction>) => {
  return {
    getPrice: (success: Callback, fail: Callback) => dispatch(BurgerActionBuilder.getPrice(success, fail)),
  }
}
const connector = connect(mapStateToProps, mapDispatchToProps);

const withPrice = <P extends Object> (WrappedComponent: ComponentType<P>) => {

  const ComponentWithPrice = class extends Component<P & ComponentWithPriceProps> {

    state = {
      spinner: { show: true },
    };

    componentDidMount() {
      this.props.price.isEmpty ? this.props.getPrice(this.success, this.fail) : this.success();
    }

    render() {
      if (this.state.spinner.show) {
        return <FlexView mainAxisAlignment={MainAxisAlignment.CENTER} crossAxisAlignment={CrossAxisAlignment.CENTER}><Spinner /></FlexView>;
      } else {
        return <WrappedComponent { ...this.props } />
      }
    }

    private success = () => {
      this.setState({ spinner: { show: false } });
    }

    private fail = (error: any) => {
      console.log(error);
      throw new Error("fail to get price");
    }

  }

  const ComponentWithPriceWithStore = connector(ComponentWithPrice as any);
  return ComponentWithPriceWithStore;
}

interface ComponentWithPriceProps {
  getPrice: (success: Callback, fail: Callback) => void;
  price: PriceModel;
}

export { withPrice };