import { PersistentKey } from "./PersistentKey";


class LocalRepository {

  static get count() {
    return localStorage.length;
  }

  static save = (key: PersistentKey, value: string) => localStorage.setItem(key, value);
  static retrieve = (key: PersistentKey) => localStorage.getItem(key);
  static keyAt = (index: number) => localStorage.key(index);
  static delete = (key: PersistentKey) => localStorage.removeItem(key);
  static deleteAll = () => localStorage.clear();

}

export { LocalRepository }