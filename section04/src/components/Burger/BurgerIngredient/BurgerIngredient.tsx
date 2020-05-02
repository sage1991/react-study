import React, { ReactElement, Component } from "react";
const style = require("./BurgerIngredient.css");


export enum IngredientType {
  BreadBottom = "bread-bottom",
  BreadTop = "bread-top",
  Meat = "meat",
  Cheese = "cheese",
  Bacon = "bacon",
  Salad = "salad",
}

interface BurgerIngredientProps {
  type : IngredientType,
}

export default class BurgerIngredient extends Component<BurgerIngredientProps> {
  
  render() {
    return this.getIngredient();
  }

  getIngredient() : ReactElement | null {
    let ingredient: ReactElement | null;
    switch (this.props.type) {
      case IngredientType.BreadBottom:
        ingredient = <div className={style.BreadBottom}></div>;
        break;
      case IngredientType.BreadTop:
        ingredient = (
          <div className={style.BreadTop}>
            <div className={style.Seeds1}></div>
            <div className={style.Seeds2}></div>
          </div>
        );
        break;
      case IngredientType.Meat:
        ingredient = <div className={style.Meat}></div>;
        break;
      case IngredientType.Cheese:
        ingredient = <div className={style.Cheese}></div>;
        break;
      case IngredientType.Bacon:
        ingredient = <div className={style.Bacon}></div>;
        break;
      case IngredientType.Salad:
        ingredient = <div className={style.Salad}></div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}
