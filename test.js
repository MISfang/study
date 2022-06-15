
const test = {};

console.log('%c 🌮 test.__proto__: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', test.__proto__.__proto__);

Object.__proto__;
console.log('%c 🥓 Object.__proto__: ', 'font-size:20px;background-color: #FFDD4D;color:#fff;', Object.__proto__ == Function.prototype);

Function.__proto__ == Object.prototype;
console.log('%c 🍬 Function.__proto__==Object.prototype: ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', Function.__proto__ === Function.prototype);