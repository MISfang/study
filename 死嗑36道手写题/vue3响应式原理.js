const data = {
  name: '方宇龙',
  age: 21,
  studentId: '20195505',
  nickName: '隔壁老方'
};

const dataProxy = new Proxy(data, {
  get(target, key, receiver) {
    const res = Reflect.get(target, key, receiver);
    console.log('%c 🍵 get: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', key);
    console.log('%c 🥩 res: ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', res);
    return res;
  },

  set(target, key, val, receiver) {
    const res = Reflect.set(target, key, val, receiver);
    console.log('%c 🍍 set: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', key, val);
    console.log('%c 🥛 res: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', res);
    return res;
  },

  deleteProperty(target, key) {
    const res = Reflect.deleteProperty(target, key);
    console.log('%c 🍍 delete: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', key);
    console.log('%c 🥛 res: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', res);
    return res;
  }
});

console.log('%c 🌽 data.nickName: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', dataProxy.nickName);

dataProxy.nickName = '666';

delete dataProxy.studentId;
