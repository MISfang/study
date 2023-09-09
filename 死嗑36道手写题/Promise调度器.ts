type fn = () => Promise<void>

class Scheduler<T = any> {
  private quene: fn[]
  private maxCount: number
  private curCount: number
  constructor(maxCount: number) {
    this.quene = []
    this.maxCount = maxCount
    this.curCount = 0
  }
  add(time: number, order: any) {
    const promiseCreator = () => {
      return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          console.log('%c 🌭 order: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', order);
          resolve()
        }, time)
      })
    }
    this.quene.push(promiseCreator)
  }
  taskStart() {
    for (let i = 0; i < this.quene.length; i++) {
      this.request()
    }
  }
  request = async () => {
    if (this.quene.length && this.curCount < this.maxCount) {
      this.curCount++
      await this.quene.shift()!()
      this.curCount--
      this.request()
    }
  }
}

const scheduler = new Scheduler(2);
const addTask = (time: number, order: string) => {
  scheduler.add(time, order);
};
addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
scheduler.taskStart();

export { }
