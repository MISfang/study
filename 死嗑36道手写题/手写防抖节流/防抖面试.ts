const Fdebounce = (fn: Function, delay: number) => {
  let timer: any = null
  function _debounce(...args: any[]) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
  _debounce.cancel = () => {
    timer && clearTimeout(timer)
    timer = null
  }
  return _debounce
}

export { }