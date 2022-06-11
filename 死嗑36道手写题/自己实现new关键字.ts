const Fnew = (fn: Function, ...args: any[]) => {
  const res = Object.create(fn.prototype)
  fn.apply(res, args)
  return res
}