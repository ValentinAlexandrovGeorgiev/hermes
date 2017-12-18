import {
  GET_PRODUCT,
  GET_CATEGORY_PRODUCTS
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
    case GET_CATEGORY_PRODUCTS: {
      return {
      	products: action.payload,
      	...nextState
      }
    }
    default: {
      return state
    }
  }
}
