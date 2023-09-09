const get = <T extends Record<string, any>, U = any>(obj: T, path: string | string[], defaultVal: any = 'notsetdefault') => {
  let newPath: string[] = []
  if (Array.isArray(path)) {
    newPath = path
  } else {
    newPath = path.replace(/\[/g, '.').replace(/\]/g, '').split('.')
  }
  const res = (newPath.reduce((res, key: string) => res?.[key], obj) || defaultVal) as unknown as U
  console.log('%c 🍎 res: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', res);
  return res
}

const object = { 'a': [{ 'b': { 'c': 3 } }] };

get(object, 'a[0].b.c');
// => 3

get(object, ['a', '0', 'b', 'c']);
// => 3

get(object, 'a.b.c', 'default');
  // => 'default'
