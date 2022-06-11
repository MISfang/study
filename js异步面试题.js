const one = () => {
  async function async1() {
    console.log('%c 🍦 async1 start: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', 'async1 start');
    await async2()
    console.log('%c 🍦 async1 end: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', 'async1 end');
  }

  async function async2() {
    console.log('%c 🍦 async2 start: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', 'async2');
  }

  console.log('%c 🍿 script start: ', 'font-size:20px;background-color: #FCA650;color:#fff;', 'script start');

  setTimeout(function () {
    console.log('%c 🎂 setTimeout: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', 'setTimeout');
  }, 0)

  async1()

  new Promise(function (resolve, reject) {
    console.log('%c 🍹 promise1: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', 'promise1');
    resolve()
  }).then(function () {
    console.log('%c 🥑 promise2: ', 'font-size:20px;background-color: #B03734;color:#fff;', 'promise2');
  })

  console.log('%c 🌮 script end: ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', 'script end');
}

Promise.resolve().then(() => {
  console.log(0)
  return Promise.resolve(4)
}).then((res) => {
  console.log(res)
})

Promise.resolve().then(() => {
  console.log(1)
}).then(() => {
  console.log(2)
}).then(() => {
  console.log(3)
}).then(() => {
  console.log(5)
}).then(() => {
  console.log(6)
})