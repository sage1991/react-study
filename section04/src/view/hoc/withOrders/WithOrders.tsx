import React, { ComponentType, Component } from "react";
import { firebaseClient } from "../../../core/http/HttpClient";
import { Spinner } from "../../../core/component/atom/spinner/Spinner";
import { OrderModelBuilder } from "../../../business/model/OrderModel";
import { ContectModelBuilder } from "../../../business/model/ContectModel";
import { BurgerModelBuilder } from "../../../business/model/BurgerModel";



const withOrders = <P extends Object> (WrappedComponent: ComponentType<P>) => {

  return class extends Component<P> {
    
    state = {
      spinner: { show: true },
      orders: null,
    };

    componentDidMount() {
      this.getOrderList();
    }

    render() {
      if (this.state.spinner.show) return <Spinner />;
      return <WrappedComponent { ...this.props } orders={this.state.orders} />;
    }

    private getOrderList = async () => {
      const response = await firebaseClient.get("/orders.json", data => {
        return Object.keys(data).map(key => {
          return this.convertToOrderList(key, data[key].data);
        });
      });
      this.setState({
        spinner: { show: false },
        orders: response.data
      });
    }

    private convertToOrderList = (id: string, orderData: any) => {
      const contectModel = new ContectModelBuilder().fromJson(orderData.contect)
                                                    .build();
      const burgerModel = new BurgerModelBuilder().ingredients(orderData.burger.ingredients)
                                                  .price(orderData.burger.price)
                                                  .build();
      return new OrderModelBuilder().burger(burgerModel)
                                    .contect(contectModel)
                                    .id(id)
                                    .build();
    }

  }
}


export { withOrders };