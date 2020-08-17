import { Cloneable } from "../../core/decorator/Cloneable";


@Cloneable
class AuthModel {
  id: string;
  email: string;
  password: string;
  token: string;
  refreshToken: string;
  returnSecureToken: boolean = true;
}


class AuthModelBuilder {
  private instance = new AuthModel();

  id(id: string) {
    this.instance.id = id;
    return this;
  }

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

  refreshToken(refreshToken: string) {
    this.instance.refreshToken = refreshToken;
    return this;
  }

  returnSecureToken(returnSecureToken: boolean) {
    this.instance.returnSecureToken = returnSecureToken;
    return this;
  }

  fromJSON(authJSON: string | null) {
    if (!authJSON) return this;
    const auth = JSON.parse(authJSON);
    this.instance.id = auth.id;
    this.instance.email = auth.email;
    this.instance.password = auth.password;
    this.instance.token = auth.token;
    this.instance.refreshToken = auth.refreshToken;
    this.instance.returnSecureToken = auth.returnSecureToken;
    return this;
  }

  build() {
    return this.instance;
  }
}


export { AuthModel, AuthModelBuilder };