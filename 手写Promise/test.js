const FPromise = require('./老版本/FPromise.js');

const p1 = FPromise.reject('诡术妖姬');
const p2 = new FPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2 延时一秒');
  }, 1000);
});
const p3 = new FPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3 延时两秒');
  }, 2000);
});

const p4 = FPromise.reject('方宇龙你妈的！');

const p5 = new FPromise((resolve, reject) => {
  setTimeout(() => {
    reject('p5 rejected 延时1.5秒');
  }, 1500);
});

// 所有 Promsie 都成功
FPromise.all([p1, p2, p3])
  .then(res => console.log(res))
  .catch(err => console.log(err)); // 2秒后打印 [ 'p1', 'p2 延时一秒', 'p3 延时两秒' ]

// 一个 FPromise 失败
FPromise.all([p1, p2, p4])
  .then(res => console.log(res))
  .catch(err => console.log(err)); // p4 rejected

// 一个延时失败的 FPromise
FPromise.all([p1, p2, p5])
  .then(res => console.log(res))
  .catch(err => console.log(err)); // 1.5秒后打印 p5 rejected 延时1.5秒


// 两个失败的 FPromise
FPromise.any([p1, p4, p5])
  .then(res => console.log(res))
  .catch(err => console.log('%c 🍊 err: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', err)); // p4 rejected

