import * as types from '../actionTypes/actionTypes'


const cart = (state = [], action) => {
  switch (action.type) {
    case types.GET__USER__CART:
      return action.cart
    case types.ADD__CART:
      return [...state, action.cart]
    case types.UPDATE__ONE__CART:
      return state.map((item) => item.id === action.id ? { ...item, quantity: item.quantity++ } : item)
    case types.DELETE__CART:
      return state.filter((item) => item.id !== action.id)
    case types.UPDATE_QUANTITY:
      return state.map((item) => item.id === action.id ? { ...item, quantity: action.value } : item)
    case types.UPDATE__DETAIL_QUANTITY:
      return state.map((item) => item.id === action.id ? { ...item, quantity: parseInt(item.quantity) + parseInt(action.value) } : item)
    case types.REMOVE__CART:
      return []
    default:
      return state
  }
}

export default cart