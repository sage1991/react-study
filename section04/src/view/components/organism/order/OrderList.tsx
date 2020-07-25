import React, { FC } from "react";
import css from "./OrderList.module.css";
import { OrderModel } from "../../../../business/model/OrderModel";
import { Order } from "../../molecule/order/Order";


const OrderList: FC<OrderListProps> = (props) => {
  return (
    <ul className={css.orderList}>
      { props.orders.map(order => <Order key={order.id} model={order} />) }
    </ul>
  );
}

interface OrderListProps {
  orders: OrderModel[];
}

export { OrderList };