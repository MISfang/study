// 写一个sum函数实现如下输入输出
// console.log(sum(1, 2, 3)()); //6
// console.log(sum(1)(2)(3)()); //6
// console.log(sum(1, 2)(3)()); //6

const sum = (...args1) => {
  let arr = [...args1];
  function _sum(...args2) {
    if (args2.length === 0) {
      return arr.reduce((res, n) => res += n, 0);
    } else {
      arr = [...arr, ...args2];
      return _sum;
    }
  }
  return _sum;
};

console.log(sum(1, 2, 3)(4)(5)(6)(7)());
console.log(sum(1)(2)(3)());
console.log(sum(1, 2)(3)());