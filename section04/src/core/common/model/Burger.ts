import { Ingredient } from "../code/Ingredient";


class Burger {
  ingredients: Record<Ingredient, number>;
}


class BurgerBuilder {

  private instance = new Burger();

  ingredients(ingredients: Record<Ingredient, number>) {
    this.instance.ingredients = ingredients;
    return this;
  }

  build() {
    return this.instance;
  }

}


export { Burger, BurgerBuilder };