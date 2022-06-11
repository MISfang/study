// 两个fulfilled的Promise的then会交替执行
// 如果其中有个返回了一个新的promise，则会“慢两拍”
// 第一拍也就是第一次循环会声明新的promise
// 第二拍也就是第二次循环会吧上次声明那个promise改成fulfilled状态
// 第三拍才会执行then方法

Promise.resolve().then(() => {
  console.log(0)
  return Promise.resolve(4)
}).then((res) => {
  console.log(res)
}).then(() => {
  console.log(6)
}).then(() => {
  console.log(8)
}).then(() => {
  console.log(10)
}).then(() => {
  console.log(12)
})

// 下面效果相同
// Promise.resolve().then(() => {
//   console.log(0)
//   return Promise.reject(4)
// }).catch((err) => { console.log(err) }).then(() => {
//   console.log(6)
// }).then(() => {
//   console.log(8)
// }).then(() => {
//   console.log(10)
// }).then(() => {
//   console.log(12)
// })

Promise.resolve().then(() => {
  console.log(1)
}).then(() => {
  console.log(2)
}).then(() => {
  console.log(3)
}).then(() => {
  console.log(5)
}).then(() => {
  console.log(7)
}).then(() => {
  console.log(9)
}).then(() => {
  console.log(11)
}).then(() => {
  console.log(13)
})