import Hermes from 'sources'
import _ from 'lodash'
import {
  GET_PRODUCT,
  GET_CATEGORY_PRODUCTS,
  SORT_PRODUCTS
} from './const'

export function getProduct (id = '', state) {
  return (dispatch) => {
    return Hermes.Product.getByID(id).then((json) => {
      dispatch({
        payload: json,
        type: GET_PRODUCT
      })
    })
  }
}

export function getCategoryProducts (category = '', start = 0, count = 12, ordering) {
  return (dispatch) => {
    return Hermes.Product.getCategoryProducts(category, start, count, ordering).then((json) => {
      dispatch({
        payload: json,
        type: GET_CATEGORY_PRODUCTS
      })
    })
  }
}

export function search (value = '', start = 0, count = 12, ordering) {
  return (dispatch) => {
    return Hermes.Product.searchProducts(value, start, count, ordering).then((json) => {

      dispatch({
        payload: json,
        type: GET_CATEGORY_PRODUCTS
      })
    })
  }
}
