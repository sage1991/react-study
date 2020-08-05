import React, { Component } from "react";
import { CheckoutSummaryWithStore } from "../../containers/checkout/CheckoutSummaryWithStore";
import { RouteComponentProps, Route } from "react-router-dom";
import { ContactWithStore } from "../../containers/checkout/ContactWithStore";
import { OrderModel } from "../../../business/model/OrderModel";
import { Callback } from "../../../core/types/function/Callback";


class Checkout extends Component<CheckoutProps> {

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

  private onOrder = (model: OrderModel) => {
    this.props.order(model, this.success, this.fail);
  }

  private success = () => {
    this.props.history.push("/orders");
  }

  private fail = (error: Error) => {
    throw new Error("fail to order");
  }

}

interface CheckoutProps extends RouteComponentProps {
  order: Callback;
}

export { Checkout };