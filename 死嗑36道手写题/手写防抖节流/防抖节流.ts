const debounce = (fn: Function, delay: number, immediate: boolean = false): Function => {
  let timer = null
  let isInvoke = false
  function _debounce(...args) {
    timer && clearTimeout(timer)

    if (!isInvoke && immediate) {
      fn.apply(this, args)
      isInvoke = true
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args)
        isInvoke = false
      }, delay);
    }
  }

  _debounce.cancel = () => {
    timer && clearTimeout(timer)
    timer = null
    isInvoke = false
  }

  return _debounce
}


export {
  debounce
}