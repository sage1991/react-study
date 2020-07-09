import { connect } from "react-redux";
import { BuildControls as BuildControlsComponent } from "../../../components/Burger/BuildControls/BuildControls";
import { Dispatch } from "redux";
import { Action } from "../../../core/store/action/Action";
import { BurgerAction } from "../../../core/store/action/actionType/BurgerAction";
import { Ingredient } from "../../../core/business/code/Ingredient";
import { StoreState } from "../../../core/store/Store";

const mapStateToProps = (state: StoreState) => {
  return {
    burger: state.burgerState.burger
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<BurgerAction>>) => {
  return {
    onAddIngredients: (ingredient: Ingredient) => dispatch({ type: BurgerAction.ADD_INGREDIENTS, payload: { ingredient: ingredient, count: 1 } }),
    onRemoveIngredients: (ingredient: Ingredient) => dispatch({ type: BurgerAction.ADD_INGREDIENTS, payload: { ingredient: ingredient, count: 1 } })
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);
const BuildControls = connectToStore(BuildControlsComponent);

export { BuildControls };