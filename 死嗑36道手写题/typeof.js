Object.prototype.Ftypeof = function () {
  return Object.prototype.toString.call(this).slice(8, -1).toLowerCase();
};

const Ftypeof = function (target) {
  return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
};

return Object.prototype.toString.call(target).toLowerCase().slice(8, -1);

Ftypeof(2020); // number
Ftypeof("石头加油"); // string
Ftypeof(true); // boolean
Ftypeof(undefined); // undefined
Ftypeof(null); // null
Ftypeof(Symbol("没毛病！")); // symbol
Ftypeof(1n); // bigint
Ftypeof({}); // object
Ftypeof(Ftypeof); // function
Ftypeof([]); // array
Ftypeof(new Date()); // date
// // 还是没法细分自定义类，如果需要的话可以再结合constructor.name继续封装
Ftypeof(new Ftypeof()); // object
