import React, { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import { OrderListWithOrders } from "../../containers/order/OrderListWithOrders";
import { withAuth } from "../../hoc/withAuth/WithAuth";

const Order: FC<RouteComponentProps> = (props) => {
  return <OrderListWithOrders />;
}


const OrderWithAuth = withAuth(Order);
export { OrderWithAuth as Order };