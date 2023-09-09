interface Person {
  name: string,
  age: string,
  sex?: string
}

class Person {
  constructor(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
  }
}


