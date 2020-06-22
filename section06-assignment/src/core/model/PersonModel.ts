

class PersonModel {
  id: number;
  name: string;
  age: number;
}


class PersonModelBuilder {
  
  private instance = new PersonModel();

  id(id: number) {
    this.instance.id = id;
    return this;
  }

  name(name: string) {
    this.instance.name = name;
    return this;
  }

  age(age: number) {
    this.instance.age = age;
    return this;
  }

  build() {
    return this.instance;
  }
}


export { PersonModel, PersonModelBuilder };