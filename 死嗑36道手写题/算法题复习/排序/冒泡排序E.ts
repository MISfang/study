const bubbleSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[i]) [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
    }
  }
  return arr
}







// const bubbleSort = (arr: number[]) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i; j++) {
//       if (arr[j] < arr[j - 1]) {
//         [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
//       }
//     }
//   }
//   return arr
// }

const arr4 = [1, 8, 5, 79, 4, 5, 7, 88, 45, 45, 1, 2, 4, 7, 5, 6, 4, 70]

// bubbleSort(arr, false)
console.log('%c 🥦 bubbleSort(arr): ', 'font-size:20px;background-color: #FFDD4D;color:#fff;', bubbleSort(arr4));