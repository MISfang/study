const A = Object.create([1, 2, 3, 4, 7, 8]).__proto__;
console.log('%c 🍲 A: ', 'font-size:20px;background-color: #FCA650;color:#fff;', A);

const B = {}.__proto__;
console.log('%c 🍍 B: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', B === Object.prototype);