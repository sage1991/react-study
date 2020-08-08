import { Cloneable } from "../../core/decorator/Cloneable";


@Cloneable
class ContectModel {
  name: string;
  street: string;
  email: string;
  cellphone: string;
}



class ContectModelBuilder {
  
  private instance = new ContectModel();

  name(name: string) {
    this.instance.name = name;
    return this;
  }
  
  street(street: string) {
    this.instance.street = street;
    return this;
  }
  
  email(email: string) {
    this.instance.email = email;
    return this;
  }
  
  cellphone(cellphone: string) {
    this.instance.cellphone = cellphone;
    return this;
  }


  fromJson(data: any) {
    return this.name(data.name)
                .street(data.street)
                .email(data.email)
                .cellphone(data.cellphone);
  }

  build() {
    return this.instance;
  }
}

export { ContectModel, ContectModelBuilder };