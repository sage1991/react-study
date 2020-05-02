import { IngredientType } from "../../components/Burger/BurgerIngredient/BurgerIngredient";


export function ingredientsTypeMapper(type:string): IngredientType {
  switch (type) {
    case "salad":
      return IngredientType.Salad;
    case "bacon":
      return IngredientType.Bacon;
    case "cheese":
      return IngredientType.Cheese;
    case "meat":
      return IngredientType.Meat;
    case "bread-top":
      return IngredientType.BreadTop;
    case "bread-bottom":
      return IngredientType.BreadBottom;
    default:
      throw new Error("unKnown Ingredient type.");
  }
}
