import { ThunkDispatch } from "redux-thunk";
import { StoreState } from "../../../core/store/Store";
import { BurgerAction } from "../../../core/store/action/type/BurgerAction";
import { OrderModel } from "../../../business/model/OrderModel";
import { Callback } from "../../../core/types/function/Callback";
import { BurgerActionBuilder } from "../../../core/store/action/builder/BurgerActionBuilder";
import { connect } from "react-redux";
import { Checkout } from "../../page/checkout/Checkout";


const mapDispatchToProps = (dispatch: ThunkDispatch<StoreState, null, BurgerAction>) => {
  return {
    order: (model: OrderModel, success: Callback, fail: Callback) => dispatch(BurgerActionBuilder.orderBurger(model, success, fail)),
  }
}

const connector = connect(null, mapDispatchToProps);
const CheckoutWithStore = connector(Checkout);

export { CheckoutWithStore };
