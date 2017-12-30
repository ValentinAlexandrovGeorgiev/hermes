import {
  ADD_TO_BREADCRUMBS
} from 'actions/const'

module.exports = function (state = {}, action) {
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case ADD_TO_BREADCRUMBS: {
      return {
        ...nextState,
        breadcrumbs: action.payload
      }
    }
    default: {
      return state
    }
  }
}
