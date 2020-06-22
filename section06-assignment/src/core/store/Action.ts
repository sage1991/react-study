
class Action<T, P> {
  type: T;
  payload: P;
  constructor(type: T, payload: P) {
    this.type = type;
    this.payload = payload;
  }
}

export { Action };