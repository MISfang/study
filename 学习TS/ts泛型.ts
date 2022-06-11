class Queue<T>{
  private data: T[] = []
  push(item: T) {
    this.data.push(item)
  }
  pop(): T {
    return this.data.pop()
  }
}

const numQue = new Queue<number>()
// numQue.push('666')