import {
  GET_CATEGORIES
} from 'actions/const'

module.exports = function (state = {}, action) {
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case GET_CATEGORIES: {
      return {
        ...nextState,
        categories: action.payload
      }
    }
    default: {
      return state
    }
  }
}
