const obj = {};
const arr = [];
class Foo { }
const foo1 = new Foo();

const test = {
  a: obj.__proto__ === Object.prototype,
  b: Object.prototype.constructor === Object,
  c: Object.prototype.__proto__ === null,
  c2: Object.__proto__ === Function.prototype,
  d: Foo.__proto__ === Function.prototype,
  e: Foo.prototype.constructor === Foo,
  f: foo1.__proto__ === Foo.prototype,
  f1: Foo.__proto__ === Function.prototype,
  j: Function.__proto__ === Function.prototype,
  h: Function.prototype.constructor === Function,
  i: Array.prototype === arr.__proto__,
  g: Array.__proto__ === Function.prototype,
};

console.log('%c 🍥 test: ', 'font-size:20px;background-color: #465975;color:#fff;', test);