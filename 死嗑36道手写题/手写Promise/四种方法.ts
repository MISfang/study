const Fall = (cbs: Promise<any>[]) => {
  if (typeof cbs[Symbol.iterator] !== "function") throw new Error("参数不可迭代！")

  return new Promise((resolve, reject) => {
    const res: any[] = []
    for (let i = 0; i < cbs.length; i++) {
      Promise.resolve(cbs[i]).then((value) => {
        res[i] = value
        if (Object.keys(res).length === cbs.length) {
          resolve(res)
        }
      }, reject)
    }
  })
}

const Fany = (cbs: Promise<any>[]) => {
  if (typeof cbs[Symbol.iterator] !== "function") throw new Error("参数不可迭代!")
  return new Promise((resolve, reject) => {
    const reasons: any[] = []
    for (let i = 0; i < cbs.length; i++) {
      Promise.resolve(cbs[i]).then(resolve, (err) => {
        reasons[i] = err;
        if (Object.keys(reasons).length === cbs.length) {
          reject(new Error('Promise全部失败!'))
        }
      })
    }
  })
}
const FallSettled = (cbs: Promise<any>[]) => {
  if (typeof cbs[Symbol.iterator] !== "function") throw new Error("参数不可迭代")
  return new Promise((resolve) => {
    const res: any[] = []
    for (let i = 0; i < cbs.length; i++) {
      Promise.resolve(cbs[i]).then((value) => {
        res[i] = { status: 'resolved', value }
        if (Object.keys(res).length === cbs.length) {
          resolve(res)
        }
      }, (reason) => {
        res[i] = { status: 'rejected', reason }
        if (Object.keys(res).length === cbs.length) {
          resolve(res)
        }
      })
    }
  })
}

const Frace = (cbs: Promise<any>[]) => {
  if (typeof cbs[Symbol.iterator] !== "function") throw new Error("参数不可迭代")
  return new Promise((resolve, reject) => {
    for (let i = 0; i < cbs.length; i++) {
      Promise.resolve(cbs[i]).then(resolve, reject)
    }
  })
}




export { }