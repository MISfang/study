const mergeSort = (arr: number[]) => {
  if (arr.length <= 1) return arr
  const mid = arr.length >> 1;
  const l = arr.slice(0, mid);
  const r = arr.slice(mid);
  const left = mergeSort(l);
  const right = mergeSort(r);
  const res: number[] = []
  while (left.length && right.length) {
    res.push(left[0] > right[0] ? right?.shift()! : left.shift()!)
  }
  while (left.length) {
    res.push(left.shift()!)
  }
  while (right.length) {
    res.push(right.shift()!)
  }
  return res
}

const res = [1, 8, 7, 9, 5, 67, 874, 5, 45, 78, 6, 14, 57, 5, 7]

console.log('%c 🍲 mergeSort(res): ', 'font-size:20px;background-color: #7F2B82;color:#fff;', mergeSort(res));