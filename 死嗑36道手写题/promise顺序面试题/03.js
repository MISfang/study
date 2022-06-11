Promise.resolve().then(() => {
  console.log('%c 🥡 0: ', 'font-size:20px;background-color: #FCA650;color:#fff;', 0);
  return Promise.resolve(4);
}).then((res) => {
  console.log('%c 🥜 res: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', res);
});

Promise.resolve().then(() => {
  console.log('%c 🥐 1: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', 1);
}).then(() => {
  console.log('%c 🥝 2: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', 2);
}).then(() => {
  console.log('%c 🥝 3: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', 3);
}).then(() => {
  console.log('%c 🥝 5: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', 5);
}).then(() => {
  console.log('%c 🥝 6: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', 6);
});