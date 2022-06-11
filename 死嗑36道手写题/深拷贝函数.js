const Dclone = function (target, map = new WeakMap()) {

  if (typeof target !== 'object' && target !== null) {
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
    target.forEach((value) => {
      res.add(Dclone(value, map));
    });
  }

  if (target instanceof Array) {
    res = target.map(item => Dclone(item, map));
  }

  for (const key in target) {
    if (target.hasOwnProperty(key)) {
      res[key] = Dclone(target[key], map);
    }
  }

  return res;
};


