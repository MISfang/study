const selectSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]
  }
  return arr
}

const arr2 = [1, 8, 5, 79, 4, 5, 7, 88, 45, 45, 1, 2, 4, 7, 5, 6, 4, 70]

console.log('%c 🥘 selectSort(arr2): ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', selectSort(arr2));