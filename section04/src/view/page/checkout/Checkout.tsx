import React, { Component } from "react";
import { CheckoutSummaryWithStore } from "../../containers/checkout/CheckoutSummaryWithStore";
import { RouteComponentProps, Route } from "react-router-dom";
import { ContactWithStore } from "../../containers/checkout/ContactWithStore";
import { firebaseClient } from "../../../core/http/HttpClient";
import { RequestBuilder } from "../../../core/http/model/Request";
import { OrderModel } from "../../../business/model/OrderModel";


class Checkout extends Component<RouteComponentProps> {

  render() {
    return (
      <div>
        <CheckoutSummaryWithStore onCancel={this.onCancel} onContinue={this.onContinue}/>
        <Route path={`${this.props.match.path}/contact`}
               render={this.renderContectData} />
      </div>
    );
  }

  private onCancel = () => {
    this.props.history.goBack();
  }

  private onContinue = () => {
    this.props.history.replace(`${this.props.match.path}/contact`);
  }

  private renderContectData = () => {
    return <ContactWithStore onOrder={this.onOrder} />;
  }

  private onOrder = async (orderModel: OrderModel) => {
    const request = new RequestBuilder<OrderModel>().payload(orderModel).build();
    const response = await firebaseClient.post("/orders.json", request);
    if (response.isSuccess) {
      this.props.history.push("/orders");
    } else {
      throw new Error("fail to order");
    }
  }

}


export { Checkout };