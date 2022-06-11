class LRUcache<K, V>{
  private max: number
  private map: Map<K, V>
  constructor(max: number) {
    this.max = max
    this.map = new Map<K, V>()
  }
  set(key: K, value: V) {
    const { map, max } = this
    if (map.has(key)) {
      map.delete(key)
    }
    map.set(key, value)
    if (map.size > max) {
      map.delete(Array.from(map)[0][0])
    }
  }
  get(key: K) {
    const { map } = this
    if (!map.has(key)) {
      return null
    }
    const res = map.get(key)
    map.delete(key)
    map.set(key, res!)
    console.log('%c 🍌 res: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', res);
    return res
  }
}


// class LRUcache<K, V>{
//   private max: number
//   private map: Map<K, V>
//   constructor(max: number) {
//     this.max = max
//     this.map = new Map<K, V>()
//   }
//   set(key: K, value: V) {
//     const { map, max } = this
//     if (map.has(key)) {
//       map.delete(key)
//     }
//     map.set(key, value)
//     if (map.size > max) {
//       const delKey = Array.from(map)[0][0]
//       map.delete(delKey)
//     }
//   }
//   get(key: K) {
//     const { map } = this
//     if (!map.has(key)) {
//       return null
//     }
//     const res = map.get(key)
//     map.delete(key)
//     map.set(key, res)
//     console.log('%c 🥤 res: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', res);
//     return res
//   }
// }



const LRU = new LRUcache<number, number>(4)
LRU.set(1, 1)
LRU.set(2, 2)
LRU.set(3, 3)
LRU.set(4, 4)

LRU.get(2)
LRU.get(1)
LRU.set(5, 5)
LRU.set(6, 6)
LRU.get(3)
LRU.get(4)
