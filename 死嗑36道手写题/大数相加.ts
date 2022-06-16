const a = "9007199254740991";
const b = "1234567899999999999";

const addBigNumber = (a: number | string, b: number | string): number => {
  a = a.toString();
  b = b.toString();
  const maxLen = Math.max(a.length, b.length);
  a = a.padStart(maxLen, '0')
  b = b.padStart(maxLen, '0')
  let t = 0, f = 0
  let res = ''
  for (let i = maxLen - 1; i >= 0; i--) {
    t = +a[i] + +b[i] + f
    f = Math.floor(t / 10)
    res = t % 10 + res
  }
  if (!f) {
    res = res + f
  }
  return +res
}


console.log('%c 🍷 addBigNumber(a, b): ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', addBigNumber(a, b));
