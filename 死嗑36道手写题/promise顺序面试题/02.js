async function async01() {
  console.log('%c 🍢 async01 start: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', 'async01 start');
  await async02();
  console.log('%c 🍢 async01 end: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', 'async01 end');
}

async function async02() {
  console.log('%c 🍢 async02: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', 'async02');
}

console.log('%c 🥩 script start: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', 'script start');
setTimeout(function () {
  console.log('%c 🍋 setTimeout: ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', 'setTimeout');
}, 0);

async01();
new Promise(function (resolve, reject) {
  console.log('%c 🍶 promise01: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', 'promise01');
  resolve();
}).then(function () {
  console.log('%c 🍇 promise02: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', 'promise02');
});

console.log('%c 🥩 script end: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', 'script end');
