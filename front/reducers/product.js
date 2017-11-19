import {
  GET_PRODUCT
} from 'actions/const'


module.exports = function (state = {}, action) {
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case GET_PRODUCT: {
      return {
        product: action.payload,
        ...nextState
      }
    }
    default: {
      return state
    }
  }
}
