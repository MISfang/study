Array.prototype.Fmap = function (cb, thisArg) {
  if (typeof cb !== 'function') throw new TypeError('回调不可用');
  const arr = Object(this);
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      const item = cb.call(thisArg, arr[i], i, arr);
      res.push(item);
    }
  }
  return res;
};

const arr = [1, 2, 3, 4, 5, 6];


arr.Fmap(n => n * 1000);
console.log('%c 🥕 arr.Fmap(n=>n*1000): ', 'font-size:20px;background-color: #FCA650;color:#fff;', arr.Fmap(n => n * 1000));