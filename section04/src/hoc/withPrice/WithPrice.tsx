import React, { ComponentType, Component } from "react"
import { firebaseClient } from "../../core/http/HttpClient";
import { PriceModelBuilder, PriceModel } from "../../core/business/model/PriceModel";
import { Spinner } from "../../components/UI/spinner/Spinner";
import { store } from "../../core/store/Store";
import { BurgerAction } from "../../core/store/action/actionType/BurgerAction";


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
        return <Spinner />;
      } else {
        return <WrappedComponent {...this.props} />
      }
    }

    private async getPrice() {
      const response = await firebaseClient.get("/price.json", undefined, (data) => {
        return new PriceModelBuilder().base(data.base)
                                      .bacon(data.bacon)
                                      .cheese(data.cheese)
                                      .meat(data.meat)
                                      .salad(data.salad)
                                      .build();
      });

      if (response.isSuccess) {
        store.dispatch({ type: BurgerAction.SET_PRICE, payload: response.data });
        this.setState({
          spinner: { show: false },
          price: response.data
        });
      } else {
        throw new Error("fail to get price");
      }
    }

  }
}

export { withPrice };