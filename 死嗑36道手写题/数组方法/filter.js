Array.prototype.Ffilter = function (cb, thisArg) {
  if (typeof cb !== 'function') throw new TypeError('回调不可用');
  const arr = Object(this);
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      const flag = cb.call(thisArg, arr[i], i, arr);
      if (flag) res.push(arr[i]);
    }
  }
  return res;
};


const arr = [1, 2, 3, 4, 5, 6];

console.log('%c 🍿 arr.Ffilter((n, i) => n > 5): ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', arr.Ffilter((n, i) => n > 2));

