// 先定义三个常量表示状态
enum STATUS {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected'
}

class FPromise {
  constructor(executor) {
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  status: STATUS = STATUS.PENDING;
  value = null
  reason = null

  onFulfilledFns = []
  onRejectedFns = []

  then(onFulfilled?: Function, onRejected?: Function) {
    // 参数默认化一下
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

    const nextFPromise = new FPromise((resolve, reject) => {
      if (this.status === STATUS.FULFILLED) {

        queueMicrotask(() => {
          try {
            const res = onFulfilled(this.value)
            this.handleNextPromise(nextFPromise, res, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })

      } else if (this.status === STATUS.REJECTED) {

        queueMicrotask(() => {
          try {
            const res = onRejected(this.reason)
            this.handleNextPromise(nextFPromise, res, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })

      } else if (this.status === STATUS.PENDING) {
        this.onFulfilledFns.push(() => {
          queueMicrotask(() => {
            try {
              const res = onFulfilled(this.value)
              this.handleNextPromise(nextFPromise, res, resolve, reject)
            } catch (error) {
              reject(error)
            }
          })
        })
        this.onRejectedFns.push(() => {
          queueMicrotask(() => {
            try {
              const res = onRejected(this.reason)
              this.handleNextPromise(nextFPromise, res, resolve, reject)
            } catch (error) {
              reject(error)
            }
          })
        })
      }
    })

    return nextFPromise
  }

  catch(onRejected: Function) {
    return this.then(undefined, onRejected)
  }

  finally(cb: Function) {
    return this.then(
      value => FPromise.resolve(cb()).then(() => value),
      reason => FPromise.resolve(cb()).then(() => { throw reason })
    )
  }
  resolve(value) {
    if (this.status === STATUS.PENDING) {
      this.status = STATUS.FULFILLED
      this.value = value
      while (this.onFulfilledFns.length) {
        this.onFulfilledFns.shift()(value)
      }
    }
  }

  static resolve(param) {
    if (param instanceof FPromise) {
      return param
    }
    return new FPromise((resolve, reject) => {
      resolve(param)
    })
  }

  reject(reason) {
    if (this.status === STATUS.PENDING) {
      this.status = STATUS.REJECTED
      this.reason = reason
      while (this.onRejectedFns.length) {
        this.onRejectedFns.shift()(this.reason)
      }
    }
  }

  static reject(reason) {
    return new FPromise((resolve, reject) => {
      reject(reason)
    })
  }

  // 特殊的方法
  static race(promises: FPromise[]) {
    new FPromise((resolve, reject) => {
      for (const item of promises) {
        FPromise.resolve(item).then(resolve, reject)
      }
    })
  }

  static all(promises: FPromise[]) {
    const res = []
    return new FPromise((resolve, reject) => {
      promises.forEach((item, i) => {
        FPromise.resolve(item).then((val) => {
          res[i] = val
          if (Object.keys(res).length === promises.length) {
            resolve(res)
          }
        }, reject)
      })
    })
  }

  static any(promises: FPromise[]) {
    const res = []
    return new FPromise((resolve, reject) => {
      promises.forEach((item, i) => {
        FPromise.resolve(item).then(resolve, (err) => {
          res[i] = { status: 'rejected', val: err }
          if (Object.keys(res).length === promises.length) {
            reject({ message: '所以Promise都失败了！', reason: res })
          }
        })
      })
    })
  }

  static allSettled(promises: FPromise[]) {
    const resArr = []

    return new FPromise((resolve) => {
      const handle = (res, index, status) => {
        resArr[index] = { status: status, val: res }
        if (Object.keys(resArr).length === promises.length) resolve(resArr)
      }

      promises.forEach((item, i) => {
        FPromise.resolve(item).then((res) => {
          handle(res, i, 'fulfilled')
        }, (err) => {
          handle(err, i, 'rejected')
        })
      })
    })
  }

  private handleNextPromise(nextPromise, res, resolve, reject) {
    if (nextPromise === res) {
      return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }
    if (res instanceof FPromise) {
      res.then(resolve, reject)
    } else {
      resolve(res)
    }
  }
}

export { }
