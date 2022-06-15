const Fnew = function (constructor: Function, ...args: any[]) {
  const newObj = Object.create(constructor.prototype)
  constructor.apply(newObj, args)
  return newObj
}

// class Child {
//   name: '方宇龙'
//   age: number
//   constructor(age) {
//     this.age = age
//   }
//   say() {
//     console.log('%c 🍸 this.name+你好: ', 'font-size:20px;background-color: #42b983;color:#fff;', this.name + this.age + '你好');
//   }
// }

const Child = function (name, age) {
  this.name = name;
  this.age = age;
  return {
    say() {
      '草你妈'

    }
  }
}
Child.prototype.say = function () {
  console.log('%c 🍸 this.name+你好: ', 'font-size:20px;background-color: #42b983;color:#fff;', this.name + this.age + '你好');
}

const foo02 = Fnew(Child, '方宇龙', 21)
console.log('%c 🍬 foo02: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', foo02.say());

