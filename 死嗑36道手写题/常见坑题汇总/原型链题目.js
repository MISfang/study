function Foo() {
  Foo.a = () => console.log('%c 🍤 1: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', '1');
  this.a = () => console.log('2');
}

Foo.prototype.a = () => console.log('3');
Foo.prototype.b = () => console.log('4');

Foo.a = () => console.log('5');

Foo.a();//5
const obj = new Foo();
obj.a();//2
obj.b();//4
Foo.a();//1