const Fcurry = function (fn: Function) {
  const len = fn.length
  let args = []
  function _curry(...args1: any[]) {
    const newArgs = [...args, ...args1]
    if (newArgs.length >= len) {
      return fn.apply(this, args)
    } else {
      return _curry
    }
  }
  return _curry
}


const test = (a, b, c, d, e, f) => a * b * c * d * e * f
const newFn = Fcurry(test)
console.log('%c 🍇 newFn(1,2,3)(4,5,6): ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', newFn(1, 2, 3)(4, 5, 6, 555, 555));

export { }