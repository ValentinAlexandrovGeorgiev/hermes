import {
  SET_LANGUAGE
} from 'actions/const'

module.exports = function (state = {}, action) {
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case SET_LANGUAGE: {
      return {
        ...nextState,
        lang: action.payload
      }
    }
    default: {
      return state
    }
  }
}
