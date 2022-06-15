const mergeObj = function (...objs) {
  let res = Object.create(null);
  for (let i = 0; i < objs.length; i++) {
    const cur = objs[i];
    for (let k in cur) {
      if (cur.hasOwnProperty(k)) {
        res[k] = Dclone(cur[k]);
      }
    }
  }
  return res;
};

const Dclone = function (target, map = new WeakMap()) {
  if (typeof target !== "object" && target !== null) {
    return target;
  }
  if (map.has(target)) {
    return map.get(target);
  }
  let res = {};
  map.set(target, res);
  if (target instanceof Map) {
    res = new Map();
    target.forEach((value, key) => {
      res.set(Dclone(key, map), Dclone(value, map));
    });
  }
  if (target instanceof Set) {
    res = new Set();
    target.forEach(value => {
      res.add(Dclone(value, map));
    });
  }
  if (target instanceof Array) {
    res = target.map(value => Dclone(value, map));
  }
  for (const k in target) {
    if (target.hasOwnProperty(k)) {
      res[k] = Dclone(target[k], map);
    }
  }
  return res;
};

const a = {
  name: '方宇龙',
  age: 21,
  id: 20195505
};
const b = {
  id: 20198888,
  sex: '男'
};
const c = {
  game: '英雄联盟',
  love: ['诡术妖姬', '铁男'],
  test: {
    test: '123456',
    address: '北京'
  }
};

const res = mergeObj(a, b, c);
res.love[1] = '你妈的!';
res.test.test = '草你妈';
console.log('%c 🍬 res: ', 'font-size:20px;background-color: #FFDD4D;color:#fff;', res);
console.log('%c 🥔 c: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', c);
