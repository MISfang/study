class eventBus {
  private eventObj: {
    [type: string]: { fn: Function, isOnce: boolean }[]
  }
  constructor() {
    this.eventObj = {}
  }
  on(type: string, fn: Function) {
    const { eventObj } = this
    if (!eventObj[type]) eventObj[type] = []
    eventObj[type].push({ fn, isOnce: false })
  }
  once(type: string, fn: Function) {
    const { eventObj } = this
    if (!eventObj[type]) eventObj[type] = []
    eventObj[type].push({ fn, isOnce: true })
  }
  off(type: string, fn?: Function) {
    const { eventObj } = this
    if (fn === undefined) {
      eventObj[type] = []
    } else {
      eventObj[type] = eventObj[type].filter(item => item.fn !== fn)
    }
  }
  emit(type: string, ...args: any[]) {
    const { eventObj } = this
    if (!eventObj[type]) return null
    eventObj[type] = eventObj[type].filter(({ fn, isOnce }) => {
      fn(...args)
      return !isOnce
    })
  }
}



const e = new eventBus()

const fn1 = (a, b) => {
  console.log('fn1', a, b);
}
const fn2 = (a, b) => {
  console.log('fn2', a, b);
}
const fn3 = (a, b) => {
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