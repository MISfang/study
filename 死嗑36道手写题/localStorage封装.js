class FLocalStorage {
  constructor(isLocal = true) {
    this.FLocalStorage = isLocal ? localStorage : sessionStorage
  }

  setItem(key, value) {
    value !== null || undefined ? this.FLocalStorage.setItem(key, JSON.stringify(value)) : consol.log("请传入value")
  }
  getItem(key) {
    return JSON.parse(this.FLocalStorage.getItem(key))
  }
  removeItem(key) {
    this.FLocalStorage.removeItem(key)
  }
  key(index) {
    this.FLocalStorage.key(index)
  }
  length() {
    return this.FLocalStorage.length
  }
}

const FlocalStorage = new FLocalStorage()
const FsessionStorage = new FLocalStorage(false)

export {
  FlocalStorage,
  FsessionStorage
}
