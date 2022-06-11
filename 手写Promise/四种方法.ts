const Fall = (cbs: Promise<any>[]) => {
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
  return new Promise((resolve, reject) => {
    const res: any[] = []
    for (let i = 0; i < cbs.length; i++) {
      Promise.resolve(cbs[i]).then(resolve, (reason) => {
        res[i] = {
          status: 'rejected',
          reason
        }
        if (Object.keys(res).length === cbs.length) {
          reject(res)
        }
      })
    }
  })
}
const FallSettled = (cbs: Promise<any>[]) => {
  return new Promise((resolve, reject) => {
    const res: any[] = []
    for (let i = 0; i < cbs.length; i++) {
      Promise.resolve(cbs[i]).then(value => {
        res[i] = { status: 'fulfilled', value }
        if (Object.keys(res).length === cbs.length) {
          resolve(res)
        }
      }, reason => {
        res[i] = { status: 'rejected', reason }
        if (Object.keys(res).length === cbs.length) {
          reject(res)
        }
      })
    }
  })
}

const Frace = (cbs: Promise<any>[]) => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < cbs.length; i++) {
      Promise.resolve(cbs[i]).then(resolve, reject)
    }
  })
}


// const Fall = (cbs: Promise<any>[]): Promise<any> => {
//   const res = []
//   return new Promise((resolve, reject) => {
//     for (let i = 0; i < cbs.length; i++) {
//       Promise.resolve(cbs[i]).then(value => {
//         res[i] = value
//         if (Object.keys(res).length === cbs.length) {
//           resolve(res)
//         }
//       }, reject)
//     }
//   })
// }

// const Fany = (cbs: Promise<any>[]): Promise<any> => {
//   const res = []
//   return new Promise((resolve, reject) => {
//     for (let i = 0; i < cbs.length; i++) {
//       Promise.resolve(cbs[i]).then(resolve, reason => {
//         res[i] = {
//           status: 'rejected',
//           reason
//         }
//         if (Object.keys(res).length === cbs.length) {
//           reject({
//             type: new TypeError('所有promise都失败！'),
//             data: res
//           })
//         }
//       })
//     }
//   })
// }

// const Frace = (cbs: Promise<any>[]): Promise<any> => {
//   return new Promise((resolve, reject) => {
//     for (let i = 0; i < cbs.length; i++) {
//       Promise.resolve(cbs[i]).then(resolve, reject)
//     }
//   })
// }

// const allSettled = (cbs: Promise<any>[]): Promise<any> => {
//   const res = []
//   return new Promise((resolve, reject) => {
//     for (let i = 0; i < cbs.length; i++) {
//       Promise.resolve(cbs[i]).then(value => {
//         res[i] = { status: 'fulfilled', value }
//         if (Object.keys(res).length === cbs.length) {
//           resolve(res)
//         }
//       }, reason => {
//         res[i] = { status: 'rejected', reason }
//         if (Object.keys(res).length === cbs.length) {
//           resolve(res)
//         }
//       })
//     }
//   })
// }