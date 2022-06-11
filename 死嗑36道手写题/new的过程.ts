class foo {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  speak() {
    return `你好！我叫${this.name},我今年${this.age}岁了`
  }
}

// ES5的类的写法
//@ts-nocheck
function fooES5(name: string, age: number) {
  this.name = name;
  this.age = age;
}

fooES5.prototype.speak = function () {
  return `你好！我叫${this.name},我今年${this.age}岁了`
}