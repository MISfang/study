// 先定义三个常量表示状态
enum STATUS {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected'
}

class FPromise2 {
  constructor(executor) {
    try {
      executor(this.resolve, this.rejected)
    } catch (error) {
      this.rejected(error)
    }
  }
  // 内部使用的属性
  private status: STATUS = STATUS.PENDING
  private value: any = null
  private reason: any = null
  // 如果异步、缓存一个一个then的方法，等待执行
  private onFulfilledCbs: Function[] = []
  private onRjectedCbs: Function[] = []

  // 方法区
  then(onFulfilled, onRjected?) {
    // 函数初始化
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRjected = typeof onRjected === 'function' ? onRjected : error => { throw error }

    const nextFPromise2 = new FPromise2((resolve, reject) => {
      const { PENDING, FULFILLED, REJECTED } = STATUS
      const { status, value, reason, onFulfilledCbs, onRjectedCbs, handleNextPromise } = this

      if (status === PENDING) {
        onFulfilledCbs.push(() => {
          queueMicrotask(() => {
            try {
              const x = onFulfilled(value)
              handleNextPromise(nextFPromise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          })
        })
        onRjectedCbs.push(() => {
          try {
            const x = onRjected(reason)
            handleNextPromise(nextFPromise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }

      if (status === FULFILLED) {
        queueMicrotask(() => {
          try {
            const x = onFulfilled(value)
            handleNextPromise(nextFPromise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }

      if (status === REJECTED) {
        queueMicrotask(() => {
          try {
            const x = onRjected(reason)
            handleNextPromise(nextFPromise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }

    })
    return nextFPromise2
  }
  catch(onRjected) {
    return this.then(undefined, onRjected)
  }
  finally(cb) {
    return this.then(
      value => FPromise2.resolve(cb()).then(() => value),
      reason => FPromise2.resolve(cb()).then(() => { throw reason })
    )
  }

  private resolve = (value) => {
    const { PENDING, FULFILLED } = STATUS
    if (this.status === PENDING) {
      this.status = FULFILLED
      this.value = value
      while (this.onFulfilledCbs.length) {
        this.onFulfilledCbs.shift()!(value)
      }
    }
  }
  private rejected = (reason) => {
    const { PENDING, REJECTED } = STATUS
    if (this.status === PENDING) {
      this.status = REJECTED
      this.reason = reason
      while (this.onRjectedCbs.length) {
        this.onRjectedCbs.shift()!(reason)
      }
    }
  }

  // 可直接调用的静态方法
  static resolve(parameter) {
    if (parameter instanceof FPromise2) {
      return parameter
    }
    return new FPromise2(resolve => {
      resolve(parameter)
    })
  }

  static reject(reason) {
    return new FPromise2((resolve, reject) => {
      reject(reason)
    })
  }

  // 特殊静态方法
  static all(cbs: FPromise2[]) {
    const res: any[] = []
    return new FPromise2((resolve, reject) => {
      for (let i = 0; i < cbs.length; i++) {
        FPromise2.resolve(cbs[i]).then(val => {
          res[i] = val
          if (Object.keys(res).length === cbs.length) {
            resolve(res)
          }
        }, reject)
      }
    })
  }

  static any(cbs: FPromise2[]) {
    const res: any[] = []
    return new FPromise2((resolve, reject) => {
      for (let i = 0; i < cbs.length; i++) {
        FPromise2.resolve(cbs[i]).then(resolve, reason => {
          res[i] = {
            status: 'rejected',
            val: reason
          }
          if (Object.keys(res).length === cbs.length) {
            reject({ message: '所有Promise都失败了！', reasons: res })
          }
        })
      }
    })
  }

  static allSettled(cbs: FPromise2[]) {
    const res: any[] = []
    return new FPromise2((resolve) => {
      for (let i = 0; i < cbs.length; i++) {
        FPromise2.resolve(cbs[i]).then(value => {
          res[i] = { status: 'fulfilled', val: value }
          if (Object.keys(res).length === cbs.length)
            resolve(res)
        }, reason => {
          res[i] = { status: 'rejected', reason }
          if (Object.keys(res).length === cbs.length)
            resolve(res)
        })
      }
    })
  }

  static race(cbs: FPromise2[]) {
    return new FPromise2((resolve, reject) => {
      for (const cb of cbs) {
        FPromise2.resolve(cb).then(resolve, reject)
      }
    })
  }

  // 工具方法
  private handleNextPromise(nextPromise, x, resolve, reject) {
    if (nextPromise === x) {
      return reject(new TypeError('Promise发生循环引用!'))
    }
    if (x instanceof FPromise2) {
      x.then(resolve, reject)
    } else {
      resolve(x)
    }
  }
  // 方法区结束

}

export default FPromise2