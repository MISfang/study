class FArray extends Array {
  get FirstItem() {
    return this[0]
  }

  get LastItem() {
    return this[this.length - 1]
  }
}

const arr = new FArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

console.log('%c 🥟 arr.FirstItem: ', 'font-size:20px;background-color: #B03734;color:#fff;', arr.FirstItem);