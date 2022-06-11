const HOC = (...params: number[]) => (name: string) => {
  const num = params.reduce((num, n) => num + n)
  return (age: number) => {
    return `我叫${name} 我今年${age}岁了 总和为${num}`
  }
}

const data = HOC(1, 2, 3, 4, 5, 6, 7, 8, 9)
data('诡术妖姬')(20)
console.log('%c 🌰 data(诡术妖姬)(20): ', 'font-size:20px;background-color: #465975;color:#fff;', data('诡术妖姬')(20));