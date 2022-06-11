import type from './const.js'

const { INCREMENT, INCREMENT1, DECREMENT, DECREMENT1 } = type

const initState = {
  count: 0
}
const reducer = (state = initState, { type, num }) => {
  const { count } = state
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: count + 1
      }
    case DECREMENT:
      return {
        ...state,
        count: count - 1
      }
    case INCREMENT1:
      return {
        ...state,
        count: count + num
      }
    case DECREMENT1:
      return {
        ...state,
        count: count - num
      }
    default:
      return state
  }
}
export default reducer