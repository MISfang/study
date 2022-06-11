Function.prototype.Fcall = function (thisArg, ...args) {
  fn = this
  thisArg = thisArg !== undefined && thisArg !== null ? Object(thisArg) : window
  thisArg.fn = fn
  const res = thisArg.fn(...args)
  delete thisArg.fn
  return res
}
Function.prototype.Fapply = function (thisArg, args) {
  fn = this
  thisArg = thisArg !== undefined && thisArg !== null ? Object(thisArg) : window
  thisArg.fn = fn
  const res = thisArg.fn(...args)
  delete thisArg.fn
  return res
}
Function.prototype.Fbind = function (thisArg, ...args1) {
  fn = this
  thisArg = thisArg !== undefined && thisArg !== null ? Object(thisArg) : window
  thisArg.fn = fn
  return function (...args2) {
    const res = thisArg.fn(...args1, ...args2)
    delete thisArg.fn
    return res
  }

}