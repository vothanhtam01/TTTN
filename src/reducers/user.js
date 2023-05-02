import * as types from '../actionTypes/actionTypes'

const user = (state = [], action) => {
  switch (action.type) {
    case types.GET__USER__DATA :
      return action.user
    default:
      return state
  }
}

export default user