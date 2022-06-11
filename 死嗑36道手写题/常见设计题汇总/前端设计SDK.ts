class FSDK {
  productId: number;
  constructor(productId) {
    this.productId = productId;
    this.initPerformance()
    this.initError()
  }
  // 发送统计数据
  send(url: string, query: any = {}) {
    query.productId = this.productId
    const temp = []
    for (let key in query) {
      const val = query[key]
      temp.push(`${key}=${val}`)
    }
    const newUrl = `${url}?${temp.join('&')}`
  }
  // 初始化性能统计
  initPerformance() {
    //send
  }

  // 初始化错误监控
  initError() {
    // js -> indow.onerror
    //send
  }
  pv() {
    //send
  }
  event(key, value) {
    //send
  }
}