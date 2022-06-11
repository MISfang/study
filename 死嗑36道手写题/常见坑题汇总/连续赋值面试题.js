let a = { n: 1 };
let b = a;

// a.x = a = { n: 2 };
// a.x = undefined;
// let temp = a.x;
// a = { n: 2 };
// temp = { n: 2 };

console.log(a.x); // undefined
console.log(b.x); // { n: 2 }
