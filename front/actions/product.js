import Hermes from 'sources'
import {
  GET_PRODUCT,
  GET_CATEGORY_PRODUCTS,
  GET_CATEGORY_PRODUCTS_WITH_PAGINATION
} from './const'

export function getProduct (id = '', state) {
  return (dispatch) => {
    return Hermes.Product.getByID(id).then((json) => {
      dispatch({
        payload: json,
        type: GET_PRODUCT
      })
    }).catch((error) => {
      console.error(error)
    })
  }
}

export function getCategoryProducts (category = '', count = 0, pagination = false) {
  return (dispatch) => {
    return Hermes.Product.getCategoryProducts(category, count).then((json) => {
      console.log(json)
      if (pagination) {
        dispatch({
          payload: json,
          type: GET_CATEGORY_PRODUCTS_WITH_PAGINATION
        })
      } else {
        dispatch({
          payload: json,
          type: GET_CATEGORY_PRODUCTS
        })
      }
    }).catch((error) => {
      console.error(error)
    })
  }
}