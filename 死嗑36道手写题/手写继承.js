function parent2(name) {
  this.name = name;
  this.age = 21;
}

parent2.prototype.say = function () {
  console.log('%c 🥫 `你好啊！${this.name}`: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', `你好啊！${this.name}`);
};

function child(name, sex) {
  parent2.call(this, name);
  this.sex = sex;
}

child.prototype = Object.create(parent2.prototype);

const child01 = new child('方宇龙', '男');
child01.say();
console.log('%c 🍛 child01.sex: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', child01.sex);
console.log('%c 🍛 child01.age: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', child01.age);
