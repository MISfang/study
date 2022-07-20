const test = () => {
  return 'fulfiled';
};

const test2 = () => Math.random() > 0.5 ? test : null;

// 如果不确定前面拿到的是不是一个函数，那就就可以   demo?.()  的方式来执行
// 从而避免  XXX  isnot a function 的报错
setInterval(() => {
  const res = test2()?.();
  if (res) {
    console.log('%c 🥔 res: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', res);
  }
  console.log('%c 🍗 --------------------------------: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', '--------------------------------');
}, 500);

export { }