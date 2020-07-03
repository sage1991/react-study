import { Ingredient } from "../code/Ingredient";
import { PriceModel } from "./PriceModel";


class BurgerModel {
  price: PriceModel;
  ingredients: Record<Ingredient, number>;
}


class BurgerModelBuilder {

  private instance = new BurgerModel();

  price(price: PriceModel) {
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