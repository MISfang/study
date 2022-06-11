setTimeout(() => {
  console.log('%c 🍿 setTimeout01: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', "setTimeout01");
  new Promise(resolve => {
    resolve();
  }).then(() => {
    new Promise(resolve => {
      resolve();
    }).then(() => {
      console.log('%c 🥃 then04: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', "then04");
    });
    console.log('%c 🥃 then02: ', 'font-size:20px;background-color: #465975;color:#fff;', "then02");
  });
});

new Promise((resolve) => {
  console.log('%c 🍋 promise01: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', "promise01");
  resolve();
}).then(() => {
  console.log('%c 🍵 then01: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', 'then01');
});

setTimeout(() => {
  console.log('%c 🍹 setTimeout02: ', 'font-size:20px;background-color: #42b983;color:#fff;', 'setTimeout02');
});

console.log('%c 🍔 2: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', 2);

queueMicrotask(() => {
  console.log('%c 🥪 queueMicrotask01: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', 'queueMicrotask01');
});

new Promise(resolve => {
  resolve();
}).then(() => {
  console.log('%c 🥜 then03: ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', 'then03');
});