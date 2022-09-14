// class eventBus {
//   private eventObj: {
//     [type: string]: { fn: Function, isOnce: boolean }[]
//   }
//   constructor() {
//     this.eventObj = {}
//   }
//   on(type: string, fn: Function) {
//     const { eventObj } = this
//     if (!eventObj[type]) eventObj[type] = []
//     eventObj[type].push({ fn, isOnce: false })
//   }
//   once(type: string, fn: Function) {
//     const { eventObj } = this
//     if (!eventObj[type]) eventObj[type] = []
//     eventObj[type].push({ fn, isOnce: true })
//   }
//   off(type: string, fn?: Function) {
//     const { eventObj } = this
//     if (fn === undefined) {
//       eventObj[type] = []
//     } else {
//       eventObj[type] = eventObj[type].filter(item => item.fn !== fn)
//     }
//   }
//   emit(type: string, ...args: any[]) {
//     const { eventObj } = this
//     if (!eventObj[type]) return null
//     eventObj[type] = eventObj[type].filter(({ fn, isOnce }) => {
//       fn(...args)
//       return !isOnce
//     })
//   }
// }


interface eventItem {
  fn: Function
  isOnce: boolean
}
class eventBus {
  private eventObj: {
    [key: string]: eventItem[]
  }
  constructor() {
    this.eventObj = {}
  }
  on(key: string, fn: Function, isOnce: boolean = false) {
    const { eventObj } = this
    if (!eventObj[key]) eventObj[key] = []
    eventObj[key].push({
      fn,
      isOnce
    })
  }
  once(key: string, fn: Function) {
    this.on(key, fn, true)
  }
  emit(key: string, ...args: any[]) {
    const { eventObj } = this
    const curList = eventObj[key]
    if (!curList) return
    eventObj[key] = curList.filter(({ fn, isOnce }) => {
      fn(...args)
      return !isOnce
    })
  }
  off(key: string, targetFn?: Function) {
    const { eventObj } = this
    if (!eventObj[key] && eventObj[key].length) return
    if (targetFn) {
      eventObj[key] = eventObj[key].filter(({ fn }) => fn !== targetFn)
    } else {
      delete eventObj[key]
    }
  }
}

const e = new eventBus()

const fn1 = (a: any, b: any) => {
  console.log('fn1', a, b);
}
const fn2 = (a: any, b: any) => {
  console.log('fn2', a, b);
}
const fn3 = (a: any, b: any) => {
  console.log('fn3', a, b);
}

e.on("key1", fn1)
e.on("key1", fn2)
e.once("key1", fn3)

e.emit("key1", 10, 20)//都有
console.log('----------------------------------------------------------------')
e.emit("key1", 10, 20)//只有fn1，fn2
console.log('----------------------------------------------------------------')
e.off('key1', fn1)//无结果
e.emit("key1", 10, 20)//只有fn1


export { }