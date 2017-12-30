import {
  GET_ASSETS
} from 'actions/const'

module.exports = function (state = {}, action) {
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case GET_ASSETS: {
      return {
        ...nextState,
        ...action.payload
      }
    }
    default: {
      return state
    }
  }
}
