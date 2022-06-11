const quickSort = (arr: number[]) => {
  if (arr.length <= 1) return arr
  const mid = arr[0];
  const left: number[] = [], right: number[] = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > mid) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);;
    }
  }
  return [...quickSort(left), mid, ...quickSort(right)]
}
const res2 = [1, 8, 7, 9, 5, 67, 874, 5, 45, 78, 6, 14, 57, 5, 7];

console.log('%c 🍷 quickSort(res2): ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', quickSort(res2));