import React, { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import { OrderListWithOrders } from "../../containers/order/OrderListWithOrders";

const Order: FC<RouteComponentProps> = (props) => {
  return <OrderListWithOrders />;
}

export { Order };