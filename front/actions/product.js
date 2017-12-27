import Hermes from 'sources'
import _ from 'lodash'
import {
  GET_PRODUCT,
  GET_CATEGORY_PRODUCTS,
  GET_CATEGORY_PRODUCTS_WITH_PAGINATION,
  SORT_PRODUCTS
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

export function sort (sorting) {
  return (dispatch, nextState) => {
    const products = nextState().product_information.products

    switch(sorting) {
      case 'name': {
        dispatch({
          payload: _.sortBy(products, ['name']),
          type: SORT_PRODUCTS
        })
        break;
      }
      case 'price': {
        dispatch({
          payload: _.sortBy(products, [(p) => parseFloat(p.price)]),
          type: SORT_PRODUCTS
        })
        break;
      }
      case 'id': {
        dispatch({
          payload: _.sortBy(products, ['product_id']),
          type: SORT_PRODUCTS
        })
        break;
      }
      default: {
        dispatch({
          payload: products,
          type: SORT_PRODUCTS
        })
        break;1
      }
    }

  }
}