// // ES5方法
// const unique1 = (...arrs) => {
//   const temp = myFlat(arrs);
//   return temp.filter((item, index) => temp.indexOf(item) === index);
// };

// // ES6方法
// const unique2 = (...args) => {
//   return [...new Set(myFlat(args))];
// };

// const myFlat = (arr) => {
//   let temp = arr;
//   while (temp.some((item) => Array.isArray(item))) {
//     temp = [].concat(...temp);
//   }
//   return temp;
// };


console.log('%c666', 'font-size:20px;background-color: #4b4b4b;color:#fff;', unique2([1, 2, 8, [1, 2, 7, 8, 9], 3, 4], [2, 3, 4, 5, 6, [1, 2, 3, 4, 7, [8, 9, 7, 4, 1]]]));

console.log('%c1111', 'font-size:20px;background-color: #4b4b4b;color:#1e1e3f;', unique1([1, 2, 8, [1, 2, 7, 8, 9], 3, 4], [2, 3, 4, 5, 6, [1, 2, 3, 4, 7, [8, 9, 7, 4, 1]]]));