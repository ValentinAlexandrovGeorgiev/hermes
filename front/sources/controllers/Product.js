import { GET_PRODUCT_BY_ID } from '../links'
import HTTP from '../HTTP'

class Product {
  getByID (id) {
    return new Promise((resolve, reject) => {
      HTTP.get(`${GET_PRODUCT_BY_ID}${id}`).then((json) => {
        if (json) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    })
  }
}

export default Product
