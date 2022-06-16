const Fthrottle = (fn: Function, interval: number) => {
  let lastTime = 0;
  function _throttle(...args: any[]) {
    let nowTime = new Date().getTime();
    let remainTime = nowTime - lastTime;
    if (remainTime >= interval) {
      fn.apply(this, args)
      lastTime = nowTime;
    }
  }
  return _throttle
}