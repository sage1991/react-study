import { Constraint } from "../../../code/common/Constraint";

class ValidationModel {
  type: Constraint;
  constraint: any;
}

class ValidationModelBuilder {
  
  private instance = new ValidationModel();

  type(type: Constraint) {
    this.instance.type = type;
    return this;
  }

  constraint(constraint: any) {
    this.instance.constraint = constraint;
    return this;
  }

  build() {
    return this.instance;
  }
}

export { ValidationModel, ValidationModelBuilder };