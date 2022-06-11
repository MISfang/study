import type from './const.js'
const { INCREMENT, INCREMENT1, DECREMENT, DECREMENT1 } = type


export const increment = () => ({
  type: INCREMENT
})
export const decrement = () => ({
  type: DECREMENT
})
export const increment1 = (num) => ({
  type: INCREMENT1,
  num
})
export const decrement1 = (num) => ({
  type: DECREMENT1,
  num
})
