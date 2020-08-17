import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Ingredient } from "../../../business/code/Ingredient";
import { StoreState } from "../../../core/store/Store";
import { BuildControls } from "../../components/molecule/burger/controls/BuildControls";
import { BurgerActionBuilder } from "../../../core/store/action/builder/BurgerActionBuilder";
import { SignActionBuilder } from "../../../core/store/action/builder/SignActionBuilder";

const mapStateToProps = (state: StoreState) => {
  return {
    burgerModel: state.burger.burger,
    priceModel: state.burger.price,
    auth: state.sign.auth,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addIngredient: (ingredient: Ingredient) => dispatch(BurgerActionBuilder.addIngredients(ingredient, 1)),
    removeIngredient: (ingredient: Ingredient) => dispatch(BurgerActionBuilder.removeIngredients(ingredient, 1)),
    setRedirection: (redirection: string) => dispatch(SignActionBuilder.setRedirection(redirection)),
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);
const BuildControlsWithStore = connectToStore(BuildControls);

export { BuildControlsWithStore };