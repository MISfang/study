const test = [];
test[test.length - 1];
console.log('%c 🥤 test[test.length-1]: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', test[test.length - 1]);
test.pop();
console.log('%c 🥒 test.pop(): ', 'font-size:20px;background-color: #93C0A4;color:#fff;', test.pop());
test.shift();
console.log('%c 🍅 test.shift(): ', 'font-size:20px;background-color: #93C0A4;color:#fff;', test.shift());

undefined < 60;
console.log('%c 🥘 undefined<60: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', undefined > 100);