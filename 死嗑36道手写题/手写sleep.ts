const sleep = (timer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('睡觉结束')
    }, timer)
  })
}

const demo = async () => {
  console.log('%c 🥘 start: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', 'start', new Date().getSeconds());
  const res = await sleep(3000)
  console.log('%c 🥘 res: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', res);
  console.log('%c 🍦 end: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', 'end', new Date().getSeconds());
}
demo()

