import { StoreState } from "../../../core/store/Store";
import { connect } from "react-redux";
import { OrderList } from "../../components/organism/order/OrderList";


const mapStateToProps = (state: StoreState) => {
  return {
    orders: state.order.orders
  }
}

const connector = connect(mapStateToProps);
const OrderListWithStore = connector(OrderList);

export { OrderListWithStore };