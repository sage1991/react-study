import { Ingredient } from "../code/Ingredient";
import { Cloneable } from "../../core/decorator/Cloneable";


@Cloneable
class BurgerModel {
  price: number;
  ingredients: Record<Ingredient, number>;

  get isPurchasable() {
    const keys = Object.keys(this.ingredients) as Ingredient[];
    let count = 0;
    for (let i = 0; i < keys.length; i++) {
      count += this.ingredients[keys[i]];
    }
    return count > 0;
  }
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