import { Cloneable } from "../../core/decorator/Cloneable";


@Cloneable
class AuthModel {
  email: string;
  password: string;
  token: string;
}


class AuthModelBuilder {
  private instance = new AuthModel();

  email(email: string) {
    this.instance.email = email;
    return this;
  }

  password(password: string) {
    this.instance.password = password;
    return this;
  }

  token(token: string) {
    this.instance.token = token;
    return this;
  }

  build() {
    return this.instance;
  }
}


export { AuthModel, AuthModelBuilder };