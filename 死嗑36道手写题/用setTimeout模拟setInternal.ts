function FsetInterval<T = Function>(fn: T, time: number = 1000) {
  let timer:null|number = null
  const interval = () => {
    if (typeof fn === 'function') {
      fn()
    }
    timer = setTimeout(interval, time)
  }
  const cancel=()=>{
    if (timer) clearTimeout(timer)
  }
  return cancel
}
