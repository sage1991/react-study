import React, { Component } from "react";
import { CheckoutSummaryWithStore } from "../../containers/checkout/CheckoutSummaryWithStore";
import { RouteComponentProps, Route } from "react-router-dom";
import { ContactWithStore } from "../../containers/checkout/ContactWithStore";
import { ContectModel } from "../../../business/model/ContectModel";
import { firebaseClient } from "../../../core/http/HttpClient";
import { RequestBuilder } from "../../../core/http/model/Request";


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
    console.log(this.props);
    this.props.history.replace(`${this.props.match.path}/contact`);
  }

  private renderContectData = () => {
    return <ContactWithStore onOrder={this.onOrder} />;
  }

  private onOrder = async (contectModel: ContectModel) => {
    const request = new RequestBuilder<ContectModel>().payload(contectModel).build();
    const response = await firebaseClient.post("/orders.json", request);
    console.log(response);
    this.props.history.push("/order");
  }

}


export { Checkout };