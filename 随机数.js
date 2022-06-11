// function randomNum(minNum, maxNum) {
//   switch (arguments.length) {
//     case 1:
//       return parseInt(Math.random() * minNum + 1, 10);
//       break;
//     case 2:
//       return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
//       break;
//     default:
//       return 0;
//       break;
//   }
// } 

const randomNum = (min, max) => {
  if (min !== undefined && max !== undefined) {
    return (Math.random() * (max - min + 1) + min) * 2 >> 1
  }
  if (min !== undefined) {
    return (Math.random() * min + 1) * 2 >> 1
  }
}

const Fmap = new Map()
let count = 10 ** 5

while (count--) {
  const num = randomNum(90, 100)
  Fmap.set(num, Fmap.has(num) ? Fmap.get(num) + 1 : 1)
}

const res = {}
Fmap.forEach((item, index) => {
  res[index] = item
})
console.log('%c 🥘 res: ', 'font-size:20px;background-color: #42b983;color:#fff;', res);