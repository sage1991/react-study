import { Ingredient } from "../code/Ingredient";


class BurgerModel {
  price: number;
  ingredients: Record<Ingredient, number>;
}


class BurgerModelBuilder {

  private instance = new BurgerModel();

  price(price: number) {
    this.instance.price = price;
    return this;
  }

  ingredients(ingredients: Record<Ingredient, number>) {
    this.instance.ingredients = ingredients;
    return this;
  }

  build() {
    return this.instance;
  }

}


export { BurgerModel, BurgerModelBuilder };