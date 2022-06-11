Array.prototype.Freduce = function (cb, init) {
  if (typeof cb !== "function") throw new TypeError('回调函数不可用!');
  const arr = Object(this);
  let k = 0;
  while (!(k in arr)) k++;
  let res = init ?? arr[k];
  for (let i = k + 1; i < arr.length; i++) {
    if (i in arr) {
      res = cb(res, arr[i], i, arr);
    }
  }
  return res;
};
const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('%c 🥦 test.Freduce((res, n, i, arr) => res * n, 0): ', 'font-size:20px;background-color: #F5CE50;color:#fff;', test.Freduce((res, n, i, arr) => {
  return res * n;
}));
