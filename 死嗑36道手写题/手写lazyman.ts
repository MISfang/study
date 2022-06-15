class LazyMan {
  private cbs: Function[]
  private name: string
  constructor(name: string) {
    this.name = name
    this.cbs = []
    queueMicrotask(() => {
      this.next()
    })
  }
  private next() {
    const task = this.cbs.shift()
    task && task()
  }

  eat(food: string) {
    const cb = () => {
      console.log('%c 🥗 `${this.name}吃了${food}`: ', 'font-size:20px;background-color: #B03734;color:#fff;', `${this.name}吃了${food}`);
      this.next()
    }
    this.cbs.push(cb)
    return this
  }

  sleep(time: number) {
    const cb = () => {
      console.log('%c 🍭 `${this.name}开始睡觉${time}秒`: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', `${this.name}开始睡觉${time}秒`);
      setTimeout(() => {
        `${this.name}睡觉结束`
        this.next()
      }, time * 1000)
    }
    this.cbs.push(cb)
    return this
  }
}

new LazyMan('方宇龙').eat('666').eat('888').sleep(3).eat('999')

export { }


