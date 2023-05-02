import * as types from '../actionTypes/actionTypes'

const order = (state = false, action) => {
  switch (action.type) {
    case types.GET__ORDER :
      return action.Bool
    default:
      return state
  }
}

export default order