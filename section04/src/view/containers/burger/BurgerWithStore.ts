import { connect } from "react-redux";
import { StoreState } from "../../../core/store/Store";
import { Burger } from "../../components/organism/burger/Burger";

const mapStateToProps = (state: StoreState) => {
  return {
    model: state.burger.burger
  }
}
const connectToStore = connect(mapStateToProps);
const BurgerWithStore = connectToStore(Burger);

export { BurgerWithStore };
