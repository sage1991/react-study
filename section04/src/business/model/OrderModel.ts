import { ContectModel } from "./ContectModel";
import { BurgerModel } from "./BurgerModel";
import { Cloneable } from "../../core/decorator/Cloneable";

@Cloneable
class OrderModel {
  id: string;
  contect: ContectModel;
  burger: BurgerModel;
}


class OrderModelBuilder {

  private instance = new OrderModel();

  id(id: string) {
    this.instance.id = id;
    return this;
  }

  contect(contect: ContectModel) {
    this.instance.contect = contect;
    return this;
  }

  burger(burger: BurgerModel) {
    this.instance.burger = burger;
    return this;
  }

  build() {
    return this.instance;
  }

}

export { OrderModel, OrderModelBuilder };