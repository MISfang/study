const test = [['1', '2', '3', '4', '5'], ['a', 'b', 'c', 'd', 'e'], ['x', 'y', 'z', 'w']];


const getRes = (arr: string[][]) => {
  const getValues = (oldList: string[], newList: string[]) => {
    const res: string[] = []
    for (let i = 0; i < oldList.length; i++) {
      for (let j = 0; j < newList.length; j++) {
        res.push(`${oldList[i]}${newList[j]}`)
      }
    }
    return res
  }
  let res: string[] = ['']
  for (let i = 0; i < arr.length; i++) {
    res = getValues(res, arr[i])
  }
  return res
}

const list = getRes(test)
console.log('%c 🎂 list: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', list);

