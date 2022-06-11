const Fcurry = function (cb: Function) {
  let len = cb.length
  let arg: any[] = []
  const calc = function (...arg1) {
    arg = [...arg, ...arg1]
    if (arg.length >= len) {
      return cb.apply(this, arg)
    } else {
      return calc
    }
  }
  return calc
}

const test = (a, b, c, d, e, f) => a * b * c * d * e * f
const newFn = Fcurry(test)
console.log('%c 🍇 newFn(1,2,3)(4,5,6): ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', newFn(1, 2, 3)(4, 5, 6, 555, 555));

export { }