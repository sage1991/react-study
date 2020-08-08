import { Constructable } from "../types/interface/Constructable";


interface CloneableInterface<T> {
  clone: (obj: T) => T;
}


const Cloneable = <P extends Constructable<any>> (SuperClass: P) => {
  
  return class CloneableClass extends SuperClass {
    
    clone(isDeep?: boolean) {
      const clone = new CloneableClass();
      for (let key in this) {
        if (!this.hasOwnProperty(key)) continue;
        let value: any = this[key];
        if (isDeep && typeof this[key] === "object") {
           value = this.cloneObject(this[key]);
        }
        clone[key] = value;
      }
      return clone;
    }

    private cloneObject(obj: any) {
      let value;
      if (Array.isArray(obj)) {
        value = [ ...obj ];
      } else if ("clone" in obj && typeof obj["clone"] === "function") {
        value = obj.clone();
      } else {
        value = { ...obj };
      }
      return value;
    }


  }
}


export { Cloneable };