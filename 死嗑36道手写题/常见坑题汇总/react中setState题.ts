// setState这个api默认情况下是异步更新,但是在第二个参数的回调函数中可以拿到最新的值
// setState这个api默认情况下是覆盖合并更新,也即是几个setSate都调用会最后的那个覆盖前者的值

// 在setTimeout,setInterval,ajax,promise.then,Ajax以及fetch回调中会同步更新


// this.state.val初始值为0
this.setState({ val: this.state.val + 5 })
console.log(this.state.val)//0
this.setState({ val: this.state.val + 4 })
console.log(this.state.val)//0
this.setState({ val: this.state.val + 3 }, () => {
  console.log(this.state.val)//3
})

setTimeout(() => {
  this.setState({ val: this.state.val + 2 })
  console.log(this.state.val)//5
  this.setState({ val: this.state.val + 1 })
  console.log(this.state.val)//6
})