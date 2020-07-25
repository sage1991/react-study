import { withOrders } from "../../hoc/withOrders/WithOrders";
import { OrderList } from "../../components/organism/order/OrderList";

const OrderListWithOrders = withOrders(OrderList);
export { OrderListWithOrders };