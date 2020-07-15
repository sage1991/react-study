import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Action } from "../../../core/store/action/Action";
import { BurgerAction } from "../../../core/store/action/actionType/BurgerAction";
import { Ingredient } from "../../../business/code/Ingredient";
import { StoreState } from "../../../core/store/Store";
import { BuildControls } from "../../components/molecule/burger/controls/BuildControls";

const mapStateToProps = (state: StoreState) => {
  return {
    burgerModel: state.burger.burger,
    priceModel: state.burger.price
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<BurgerAction>>) => {
  return {
    addIngredient: (ingredient: Ingredient) => dispatch({ type: BurgerAction.ADD_INGREDIENTS, payload: { ingredient: ingredient, count: 1 } }),
    removeIngredient: (ingredient: Ingredient) => dispatch({ type: BurgerAction.REMOVE_INGREDIENTS, payload: { ingredient: ingredient, count: 1 } })
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);
const BuildControlsWithStore = connectToStore(BuildControls);

export { BuildControlsWithStore };