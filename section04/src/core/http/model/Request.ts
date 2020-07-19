

class Request<T> {
  headers: any = {};
  payload: T;
}


class RequestBuilder<T> {
  private instance = new Request<T>();

  headers(headers: any) {
    this.instance.headers = headers;
    return this;
  }

  payload(payload: T) {
    this.instance.payload = payload;
    return this;
  }

  build() {
    return this.instance;
  }
}



export { Request, RequestBuilder };