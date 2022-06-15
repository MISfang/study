// Function.prototype.Fcall = function (thisArg, ...args) {
//   thisArg = thisArg !== undefined ? thisArg : window;
//   const fn = this;
//   thisArg.fn = fn;
//   const res = thisArg.fn(...args);
//   delete thisArg.fn;
//   return res;
// };
Function.prototype.Fcall = function (thisArg, ...args) {
  thisArg = thisArg !== undefined ? thisArg : window;
  const fn = this;
  thisArg.fn = fn;
  const res = thisArg.fn(...args);
  delete thisArg.fn;
  return res;
};

Function.prototype.Fapply = function (thisArg, args) {
  thisArg = thisArg !== undefined ? thisArg : window;
  const fn = this;
  thisArg.fn = fn;
  const res = thisArg.fn(...args);
  delete thisArg.fn;
  return res;
};

Function.prototype.Fbind = function (thisArg, ...args1) {
  thisArg = thisArg !== undefined ? thisArg : window;
  const fn = this;
  function _bind(...args2) {
    thisArg.fn = fn;
    const res = thisArg.fn(...args1, ...args2);
    delete thisArg.fn;
    return res;
  }
  return _bind;
};
// Function.prototype.Fapply = function (thisArg, args) {
//   thisArg = thisArg !== undefined ? thisArg : window;
//   const fn = this;
//   thisArg.fn = fn;
//   const res = thisArg.fn(...args);
//   delete thisArg.fn;
//   return res;
// };

// Function.prototype.Fbind = function (thisArg, ...args1) {
//   thisArg = thisArg !== undefined ? thisArg : window;
//   const fn = this;
//   return function (...args2) {
//     thisArg.fn = fn;
//     const res = thisArg.fn(...args1, ...args2);
//     delete thisArg.fn;
//     return res;
//   };
// };

const test1 = {
  name: '方宇龙',
  say() {
    return this.name;
  }
};

const test2 = {
  name: '666',
  say() {
    return this.name;
  }
};
const newFn = test2.say.Fbind(test1)();
console.log('%c 🥚 newFn: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', newFn);

const myCall = function (thisArg, ...args) {
  thisArg = thisArg === undefined ? window : thisArg;
  const fn = this;
  thisArg.fn = fn;
  const res = thisArg.fn(...args);
  delete thisArg.fn;
  return res;
};

const myApply = function (thisArg, args) {
  thisArg = thisArg === undefined ? window : thisArg;
  const fn = this;
  thisArg.fn = fn;
  const res = thisArg.fn(...args);
  delete thisArg.fn;
  return res;
};

const myBind = function (thisArg, ...args1) {
  thisArg = thisArg === undefined ? window : thisArg;
  const fn = this;
  return function (...args2) {
    thisArg.fn = fn;
    const res = thisArg.fn(...args1, ...args2);
    delete thisArg.fn;
    return res;
  };
};