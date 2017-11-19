import Hermes from 'sources'
import {
  GET_PRODUCT
} from './const'

export function getProduct (id = '', state) {
  return (dispatch) => {

    return Hermes.Product.getByID(id).then((json) => {
      dispatch({
        payload: json,
        type: GET_PRODUCT
      })
    }).catch((error) => {
      console.log(error)
    })
  }
}