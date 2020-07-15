import React, { ComponentType, Component } from "react"
import { firebaseClient } from "../../../core/http/HttpClient";
import { PriceModelBuilder } from "../../../business/model/PriceModel";
import { Spinner } from "../../../core/component/atom/spinner/Spinner";
import { dispatch } from "../../../core/store/Store";
import { BurgerAction } from "../../../core/store/action/actionType/BurgerAction";
import { FlexView } from "../../../core/component/atom/flex/FlexView";
import { MainAxisAlignment } from "../../../core/code/flex/MainAxisAlignment";
import { CrossAxisAlignment } from "../../../core/code/flex/CrossAxisAlignment";


const withPrice = <P extends Object> (WrappedComponent: ComponentType<P>) => {

  return class extends Component<P> {

    state = {
      spinner: { show: true },
      price: null,
    };

    componentDidMount() {
      this.getPrice();
    }

    render() {
      if (this.state.spinner.show) {
        return <FlexView mainAxisAlignment={MainAxisAlignment.CENTER} crossAxisAlignment={CrossAxisAlignment.CENTER}><Spinner /></FlexView>;
      } else {
        return <WrappedComponent {...this.props} />
      }
    }

    private async getPrice() {

      const response = await firebaseClient.get("/price.json", (data) => {
        return new PriceModelBuilder().base(data.base)
                                      .bacon(data.bacon)
                                      .cheese(data.cheese)
                                      .meat(data.meat)
                                      .salad(data.salad)
                                      .build();
      });
      
      if (response.isSuccess) {
        dispatch({ type: BurgerAction.SET_PRICE, payload: response.data });
        this.setState({ spinner: { show: false }, price: response.data });
      } else {
        throw new Error("fail to get price");
      }
    }
  }
}

export { withPrice };