// function repect(func, times, wait) { }

// const repectFunc = repect(console.log, 4, 3000)
// repectFunc('helloworld')会输出四次，每次间隔三秒

const repect = (fn, times, wait) => {
  return (value) => {
    fn(value);
    let count = 2;
    const timer = setInterval(() => {
      if (count >= times) clearInterval(timer);
      fn(value);
      count++;
    }, wait);
  };
};

const repectFunc = repect((value) => {
  console.log(value, new Date().getSeconds());
}, 10, 2000);
repectFunc('你好啊世界');

// // 使用 unhandledrejection 来拦截全局错误  （这个是对的）
// window.addEventListener("unhandledrejection", (event) => {
//   event && event.preventDefault();
//   console.log("event", event);
// });