const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr
  const midIdx = arr.length >> 1;
  const left = arr.slice(0, midIdx);
  const right = arr.slice(midIdx)
  const orderLeft = mergeSort(left)
  const orderRight = mergeSort(right)
  const res: number[] = []
  while (orderLeft.length && orderRight.length) {
    res.push(orderLeft[0] > orderRight[0] ? orderRight.shift()! : orderLeft.shift()!)
  }
  while (orderLeft.length) {
    res.push(orderLeft.shift()!)
  }
  while (orderRight.length) {
    res.push(orderRight.shift()!)
  }
  return res
}


const res = [1, 8, 7, 9, 5, 67, 874, 5, 45, 78, 6, 14, 57, 5, 7]

console.log('%c 🍲 mergeSort(res): ', 'font-size:20px;background-color: #7F2B82;color:#fff;', mergeSort(res));