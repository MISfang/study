const binaryFind = (arr: number[], target: number) => {
  let l = 0, r = arr.length - 1
  while (l <= r) {
    const midIdx = (l + r) >> 1
    const mid = arr[midIdx]
    if (target < mid) {
      r = midIdx - 1
    } else if (target > mid) {
      l = midIdx + 1
    } else {
      return mid
    }
  }
  return -1
}

const arr55 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 55, 66, 88, 99, 120, 154]
console.log('%c 🥨 binaryFind(arr55, 154): ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', binaryFind(arr55, 154));