import { connect } from "react-redux";
import { Burger as BurgerComponent } from "../../components/Burger/Burger";
import { StoreState } from "../../../core/store/Store";

const mapStateToProps = (state: StoreState) => {
  return {
    burger: state.burgerState.burger
  }
}
const connectToStore = connect(mapStateToProps);
const Burger = connectToStore(BurgerComponent);

export { Burger };
