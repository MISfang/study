Array.prototype.FFlatten = function () {
  let res = [];
  this.forEach(item => {
    if (Array.isArray(item)) {
      res = [...res, ...item.FFlatten()];
    } else {
      res = [...res, item];
    }
  });
  return res;
};

Array.prototype.FFlatten2 = function () {
  const temp = this;
  while (temp.some(item => Array.isArray(item))) {
    tmep = [].concat(...tmep);
  }
  return temp;
};






// Array.prototype.FFlatten = function () {
//   let res = [];
//   this.forEach(item => {
//     if (Array.isArray(item)) {
//       res = [...res, ...item.FFlatten()];
//     } else {
//       res = [...res, item];
//     }
//   });
//   return res;
// };
// Array.prototype.FFlatten2 = function () {
//   const temp = this;
//   while (temp.some(item => Array.isArray(item))) {
//     temp = [].concat(...temp);
//   };
//   return temp;
// };

let arr = [1, 2, [3, 4, [5, 6, 7, [8, 9, 10]]]];

console.log('%c 🥝 [1, 2, [3, 4, [5, 6, 7, [8, 9, 10]]]].myFlatten(): ', 'font-size:20px;background-color: #E41A6A;color:#fff;', arr.FFlatten());

console.log('%c 🥝 [1, 2, [3, 4, [5, 6, 7, [8, 9, 10]]]].myFlatten(): ', 'font-size:20px;background-color: #E41A6A;color:#fff;', arr.FFlatten2());