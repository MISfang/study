import store from './store/index.js'
import { increment, increment1, decrement, decrement1 } from './store/actionCreators.js'
store.subscribe(() => {
  console.log('%c 🥧: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', 'count发送变化', store.getState().count);
})

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())


store.dispatch(increment1(5))
store.dispatch(decrement1(100))