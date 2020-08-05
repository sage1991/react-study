import { withOrders } from "../../hoc/withOrders/WithOrders";
import { OrderListWithStore } from "./OrderListWithStore";

const OrderListWithOrders = withOrders(OrderListWithStore);
export { OrderListWithOrders };