import {
  GET_ASSET
} from 'actions/const'

module.exports = function (state = {}, action) {
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case GET_ASSET: {
      return {
        ...nextState,
        assets: action.payload
      }
    }
    default: {
      return state
    }
  }
}
