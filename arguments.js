function foo(x, y, z, ...rest) {
  console.log('%c 🍖 arguments.callee: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', arguments.callee);
  console.log('%c 🍨 arguments: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', arguments);
}

foo(1, 2, 3, 4, 5, 6, 7, 8, 9)