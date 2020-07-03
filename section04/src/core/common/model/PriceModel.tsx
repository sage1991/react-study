
class PriceModel {
  meat: number;
  bacon: number;
  cheese: number;
  salad: number;
  base: number;
  get total() {
    return this.meat + this.bacon + this.cheese + this.salad + this.base;
  }
}

class PriceModelBuilder {
  private instance = new PriceModel();

  meat(meat: number) {
    this.instance.meat = meat;
    return this;
  }

  bacon(bacon: number) {
    this.instance.bacon = bacon;
    return this;
  }
  
  cheese(cheese: number) {
    this.instance.cheese = cheese;
    return this;
  }
  
  salad(salad: number) {
    this.instance.salad = salad;
    return this;
  }
  
  base(base: number) {
    this.instance.base = base;
    return this;
  }

  build() {
    return this.instance;
  }
}


export { PriceModel, PriceModelBuilder };