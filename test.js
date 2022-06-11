
const test = (target) => Object.prototype.toString.call(target).toLowerCase().slice(8, -1);

const res = test(new Map());
console.log('%c 🍶 res: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', res);