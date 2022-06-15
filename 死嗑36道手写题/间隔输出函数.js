// function repect(func, times, wait) { }

// const repectFunc = repect(console.log, 4, 3000)
// repectFunc('helloworld')会输出四次，每次间隔三秒

const repect = function (func, times, wait) {
  return function (str) {
    func(str);
    let count = 2;
    const timer = setInterval(() => {
      if (count >= times) clearInterval(timer);
      func(str);
      count++;
    }, wait);
  };
};

const repectFunc = repect((value) => {
  console.log(value, new Date().getSeconds());
}, 3, 3000);
repectFunc('你好啊世界');

// // 使用 unhandledrejection 来拦截全局错误  （这个是对的）
// window.addEventListener("unhandledrejection", (event) => {
//   event && event.preventDefault();
//   console.log("event", event);
// });