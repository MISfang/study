console.log('%c 🍅 window: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', window);
if (!("a" in window)) {
  var a = 1;
}
alert(a);

// 在浏览器执行，首先会编译代码，在全局对象上加个a值为undefined
// 然后运行阶段，执行代码!('a' in window)为false
// 不会进入条件内部也就不会执行a = 1赋值语句
// 所以打印是undefined