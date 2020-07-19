import { BurgerModel } from "./BurgerModel";


class ContectModel {
  name: string;
  street: string;
  email: string;
  cellphone: string;
  burger: BurgerModel;
}



class ContectModelBuilder {
  
  private instance = new ContectModel();

  name(name: string) {
    this.instance.name = name;
    return this;
  }
  
  street(street: string) {
    this.instance.street = street;
    return this;
  }
  
  email(email: string) {
    this.instance.email = email;
    return this;
  }
  
  cellphone(cellphone: string) {
    this.instance.cellphone = cellphone;
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

export { ContectModel, ContectModelBuilder };