const test = () => {
  return 'fulfiled';
};

const test2 = () => Math.random() > 0.5 ? test : null;

setInterval(() => {
  const res = test2()?.();
  if (res) {
    console.log('%c 🥔 res: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', res);
  }
  console.log('%c 🍗 --------------------------------: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', '--------------------------------');
}, 500);