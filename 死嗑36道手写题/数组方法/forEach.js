Array.prototype.FforEach = function (cb, thisArg) {
  if (typeof cb !== 'function') {
    throw new TypeError('回调不是一个Function！');
  }
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      cs.call(this, this[i], i, arr);
    }
  }
};

const arr = [1, 2, 3, 4, 5, 6];

arr.FforEach((n, i) => {
  console.log('%c 🍇 this: ', 'font-size:20px;background-color: #42b983;color:#fff;', this);
  console.log('%c 🥟 n, i: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', n, i);
});

