import { connect } from "react-redux";
import { Dispatch } from "redux";
import { BurgerAction } from "../../../core/store/action/type/BurgerAction";
import { Ingredient } from "../../../business/code/Ingredient";
import { StoreState } from "../../../core/store/Store";
import { BuildControls } from "../../components/molecule/burger/controls/BuildControls";
import { BurgerActionBuilder } from "../../../core/store/action/builder/BurgerActionBuilder";

const mapStateToProps = (state: StoreState) => {
  return {
    burgerModel: state.burger.burger,
    priceModel: state.burger.price,
    auth: state.sign.auth,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<BurgerAction>) => {
  return {
    addIngredient: (ingredient: Ingredient) => dispatch(BurgerActionBuilder.addIngredients(ingredient, 1)),
    removeIngredient: (ingredient: Ingredient) => dispatch(BurgerActionBuilder.removeIngredients(ingredient, 1))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);
const BuildControlsWithStore = connectToStore(BuildControls);

export { BuildControlsWithStore };