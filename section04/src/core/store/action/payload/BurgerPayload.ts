import { Ingredient } from "../../../../business/code/Ingredient";


export interface BurgerPayload {
  ingredient: Ingredient;
  count: number;
}
