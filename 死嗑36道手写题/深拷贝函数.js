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

const test = {
  say() {
    console.log('%c 🥞 测试: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', '测试');
  }
};

const newTest = Dclone(test);
test.say();