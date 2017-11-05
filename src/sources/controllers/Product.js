import { TEST_LINK } from '../links'
import HTTP from '../HTTP'

class Product {
  getByID (id) {
    return new Promise((resolve, reject) => {
      HTTP.get(HTTP.addParameters(TEST_LINK, id)).then(({ json, ok }) => {
        if (ok) {
          resolve(json)
        } else {
          reject(json)
        }
      })
  }
}

export default Product
