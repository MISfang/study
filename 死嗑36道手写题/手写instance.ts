
const Finstanceof = (instance, target) => {
  if (typeof target !== 'object' && typeof target !== 'function' && target !== null) {
    return false
  }
  let p = instance
  while (p) {
    if (p.__proto__ === target.prototype) {
      return true
    }
    p = p.__proto__
  }
  return false
}


console.log('%c 🍤 Finstanceof({}, Object): ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', Finstanceof([], Array));
