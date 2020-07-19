import { Constraint } from "../../code/common/Constraint";
import { ValidationModel } from "./model/ValidationModel";


const validate = (value: any, models: ValidationModel[]) => {
  let valid = true;
  for (let i = 0; i < models.length; i++) {
    valid = valid && _validate(value, models[i]);
  }
  return valid;
}


const _validate = (value: any, model: ValidationModel) => {
  const type = model.type;
  switch (type) {
    case Constraint.MAX_LENGTH : 
      return value.length <= model.constraint;
    case Constraint.MIN_LENGTH : 
      return value.length >= model.constraint;
    case Constraint.NOT_EMPTY : 
      let valid = value != null;
      if (typeof value === "object") {
        if (Array.isArray(value)) {
          valid = valid && value.length > 0;
        } else if (valid) {
          valid = valid && Object.keys(value).length > 0;
        }
      } else if (typeof value === "string") {
        valid = valid && value !== "";
      }
      return valid;
    case Constraint.NOT_NULL : 
      return value != null;
    case Constraint.NUMBER : 
      return typeof value === "number";
    case Constraint.STRING : 
      return typeof value === "string";
    case Constraint.REGEX : 
      return model.constraint.test(value) as boolean;
    default : 
      return false;
  }
}

export { validate };