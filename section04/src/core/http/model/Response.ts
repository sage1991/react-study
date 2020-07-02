import { Status } from "../code/Status";


class Response<T> {
  status: Status;
  data: T;
}

class ResponseBuilder<T> {

  private instance = new Response<T>();

  status(status: Status) {
    this.instance.status = status;
    return this;
  }

  data(data: T) {
    this.instance.data = data;
    return this;
  }

  build() {
    return this.instance;
  }

}


export { Response, ResponseBuilder };