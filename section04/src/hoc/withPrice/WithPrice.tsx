import React, { ComponentType, Component } from "react"
import { firebaseClient } from "../../core/http/HttpClient";
import { PriceModelBuilder } from "../../core/common/model/PriceModel";
import { Spinner } from "../../components/UI/spinner/Spinner";
import { BurgerModel } from "../../core/common/model/BurgerModel";


const WithPrice = <P extends BurgerProps> (WrappedComponent: ComponentType<P>) => {

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
        this.props.burger.price = this.state.price!;
        return <WrappedComponent {...this.props}/>
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


interface BurgerProps extends Object {
  burger: BurgerModel;
}

export { WithPrice };