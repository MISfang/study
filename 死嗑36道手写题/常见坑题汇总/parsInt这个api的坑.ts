//



const result = ['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(parseInt)
console.log('%c 🍲 result: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', result);

// 🍲 result:  [1, NaN, NaN, NaN,NaN, NaN, NaN, NaN, NaN]
//输出结果为这个因为parseInt这个api接受两个参数，第一个为要解析的  字符串  ，第二个是2-36的数字，以什么方式来解析
// 参数错误或者无法解析都会返回NaN

// 上面相当于
const arr2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
const res = arr2.map((item, index) => {
  return parseInt(item, index)
})
console.log('%c 🌮 res: ', 'font-size:20px;background-color: #B03734;color:#fff;', res);
// 如果只传回调函数，不自己传参的话，他会默认把(item, index)都传进去，也就是

// 1, 2, 3, 4, 5, 6, 7, 8, 9 数字一一对应这
// 0, 1, 2, 3, 4, 5, 6, 7, 8 进制来解析

// 前两个进制不存在，后面都是要解析字符串比进制大一位，不存在

export { }