import * as types from '../actionTypes/actionTypes'

const sort = (state = 'Tên sản phẩm', action) => {
  switch (action.type) {
    case types.SORT__BY:
      return action.sort
    default:
      return state
  }
}

export default sort