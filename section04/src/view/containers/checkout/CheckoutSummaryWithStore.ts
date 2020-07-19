import { StoreState } from "../../../core/store/Store";
import { connect } from "react-redux";
import { CheckoutSummary } from "../../components/organism/checkout/summary/CheckoutSummary";


const mapStateToProps = (state: StoreState) => {
  return {
    model: state.burger.burger
  };
}

const connector = connect(mapStateToProps);
const CheckoutSummaryWithStore = connector(CheckoutSummary);

export { CheckoutSummaryWithStore };