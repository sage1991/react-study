import { StoreState } from "../../../core/store/Store";
import { connect } from "react-redux";
import { PurchaseSummary } from "../../components/molecule/burger/summary/PurchaseSummary";



const mapStateToProps = (state: StoreState) => {
  return {
    priceModel: state.burger.price,
    burgerModel: state.burger.burger
  };
}

const connector = connect(mapStateToProps);
const PurchaseSummaryWithStore = connector(PurchaseSummary);

export { PurchaseSummaryWithStore };