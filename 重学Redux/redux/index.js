import { createStore } from 'redux'

const initState = {
  count: 0
}
// reducer
const Freducer = (state = initState, { type, num }) => {
  switch (type) {
    case 'INCERMENT':
      return { 
        ...state,
        count: state.count + 5
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 2
      }
    case 'INCERMENT2':
      return {
        ...state,
        count: state.count + num
      }
    case 'DECREMENT2':
      return {
        ...state,
        count: state.count - num
      }
    default:
      return state
  }
}

// store
const Fstore = createStore(Freducer)

// action
const action1 = { type: 'INCERMENT' }
const action2 = { type: 'DECREMENT' }
const action3 = { type: 'INCERMENT2', num: 10 }
const action4 = { type: 'DECREMENT2', num: 6 }

Fstore.subscribe(() => {
  console.log('%c 🥧: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', 'count发送变化', Fstore.getState().count);
})
Fstore.dispatch(action1)
Fstore.dispatch(action1)
Fstore.dispatch(action2)
Fstore.dispatch(action3)
Fstore.dispatch(action4)