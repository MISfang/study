const insertSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    let j = i
    const temp = arr[i]
    while (j) {
      if (arr[j - 1] > temp) {
        arr[j] = arr[j - 1]
      } else break
      j--
    }
    arr[j] = temp
  }
  return arr
}

const arr3 = [1, 8, 5, 79, 4, 5, 7, 88, 45, 45, 1, 2, 4, 7, 5, 6, 4, 70]
console.log('%c 🍝 insertSort(arr3): ', 'font-size:20px;background-color: #B03734;color:#fff;', insertSort(arr3));