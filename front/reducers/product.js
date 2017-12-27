import {
  GET_PRODUCT,
  GET_CATEGORY_PRODUCTS,
  SORT_PRODUCTS
} from 'actions/const'


module.exports = function (state = {}, action) {
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case GET_PRODUCT: {
      return {
        ...nextState,
        product: action.payload
      }
    }
    case GET_CATEGORY_PRODUCTS: {
      return {
        ...nextState,
        products: action.payload.items,
        count: action.payload.count,
        pages: action.payload.pages        
      }
    }
    case SORT_PRODUCTS: {
      return {
        ...nextState,
        products: action.payload        
      }
    }
    default: {
      return state
    }
  }
}
