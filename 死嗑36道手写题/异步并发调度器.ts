class Scheduler {
  private queue: (() => Promise<void>)[]
  private maxCount: number
  private curCount: number
  constructor(maxCount: number) {
    this.maxCount = maxCount
    this.queue = []
    this.curCount = 0
  }

  add(fn: any) {
    this.queue.push(fn)
    this.next()
  }
  next() {
    if (this.curCount >= this.maxCount && !this.queue.length) return
    this.curCount++
    const fn = this.queue.shift()?.()
    fn?.finally(() => {
      this.curCount--
      this.next()
    })
  }
}

// 延迟函数
const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time));

// 同时进行的任务最多2个
const scheduler = new Scheduler(2);

// 添加异步任务
// time: 任务执行的时间
// val: 参数
const addTask = (time: number, val: string) => {
  scheduler.add(() => sleep(time).then(() => console.log('%c 🍅 val: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', val)));
};

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');
// 2
// 3
// 1
// 4


