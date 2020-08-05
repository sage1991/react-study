import { Constructable } from "../types/interface/Constructable";


interface CloneableInterface<T> {
  clone: (obj: T) => T;
}


const Cloneable = <P extends Constructable<any>> (SuperClass: P) => {
  return class CloneableClass extends SuperClass implements CloneableInterface<CloneableClass> {
    clone() {
      const clone = new CloneableClass();
      for (let key in this) {
        if (this.hasOwnProperty(key)) {
          clone[key] = this[key];
        }
      }
      return clone;
    }
  }
}


export { Cloneable };