import * as types from '../actionTypes/actionTypes'

const cate = (state = [], action) => {
  switch (action.type) {
    case types.GET__CATE :
      return action.cate
    default:
      return state
  }
}

export default cate