import { ThunkDispatch } from "redux-thunk";
import { StoreState } from "../../../core/store/Store";
import { OrderModel } from "../../../business/model/OrderModel";
import { Callback } from "../../../core/types/function/Callback";
import { BurgerActionBuilder } from "../../../core/store/action/builder/BurgerActionBuilder";
import { connect } from "react-redux";
import { Checkout } from "../../page/checkout/Checkout";
import { UIActionBuilder } from "../../../core/store/action/builder/UIActionBuilder";
import { ReactNode } from "react";
import { Action } from "../../../core/store/action/Action";


const mapStateToProps = (state: StoreState) => {
  return {
    auth: state.sign.auth
  }
}


const mapDispatchToProps = (dispatch: ThunkDispatch<StoreState, null, Action>) => {
  return {
    order: (model: OrderModel, success: Callback, fail: Callback) => dispatch(BurgerActionBuilder.orderBurger(model, success, fail)),
    showModal: (modal: ReactNode) => dispatch(UIActionBuilder.showModal(modal)),
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const CheckoutWithStore = connector(Checkout);

export { CheckoutWithStore };
