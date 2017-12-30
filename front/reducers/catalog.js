import {
  GET_CATEGORIES,
  GET_CATALOGS
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
    case GET_CATALOGS: {
      return {
        ...nextState,
        catalogs: action.payload
      }
    }
    default: {
      return state
    }
  }
}
