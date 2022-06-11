const change = (x: any) => x = 200;
const change2 = (x: any) => x.name = '年末的';

let num = 100, obj = {
  name: '方宇龙'
};

change(num);
// change2(obj);
change2(JSON.parse(JSON.stringify(obj)));
console.log('%c 🍉 num: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', num, obj);

//num，obj不变，依然是原来的值
// 函数调用，传参数，相当于是赋值，如果是基本类型，则不改变原来的值，如果是引用类型则，他两个虽然变量名称不同，但是指向同一片内存空间

export { }