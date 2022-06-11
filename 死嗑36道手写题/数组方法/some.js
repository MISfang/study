Array.prototype.Fsome = function (cb, thisArg) {
  if (typeof cb !== "function") throw new TypeError('回调函数不可用!');
  const arr = this;
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      const newFlag = cb.call(thisArg, arr[i], i, arr[i]);
      if (newFlag) flag = true;
    }
  }
  return flag;
};

const arr = [1, 2, 3, 4, 5, 6];

console.log('%c 🍍 arr.Fsome((n, i) => n > 5): ', 'font-size:20px;background-color: #33A5FF;color:#fff;', arr.Fsome((n, i) => n > 5));

