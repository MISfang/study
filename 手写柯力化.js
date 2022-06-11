Function.prototype.Fcurrying = function () {
  const _this = this
  return function curried(...args) {
    if (args.length >= _this.length) {
      return _this.apply(this, args)
    } else {
      return function curried2(...args2) {
        return curried.apply(this, [...args, ...args2])
      }
    }
  }
}

const test = (a, b, c) => {
  return a + b + c
}
const test1 = test.Fcurrying()(10)
console.log('%c 🥩 test1: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', test1);