
const sleep = (time: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('睡觉结束')
    }, time);
  })
}
const demo = async () => {
  console.log('%c 🥘 start: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', 'start', new Date().getSeconds());
  try {
    const res = await sleep(3000)
  } catch (error) {
    console.log('%c 🥘 error: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', error);
  }
  console.log('%c 🍦 end: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', 'end', new Date().getSeconds());
}
demo()

