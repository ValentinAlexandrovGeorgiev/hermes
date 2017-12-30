import { 
  GET_PRODUCT_BY_ID,
  GET_CATEGORY_PRODUCTS
} from '../links'
import HTTP from '../HTTP'

class Product {
  getByID (id) {
    return new Promise((resolve, reject) => {
      HTTP.get(`${GET_PRODUCT_BY_ID}${id}`).then((json) => {
        if (!json.errorObject) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    })
  }

  getCategoryProducts (category, start, count, ordering) {
    return new Promise((resolve, reject) => {
      HTTP.get(HTTP.addParameters(`${GET_CATEGORY_PRODUCTS}${category}`, {start, count, ordering})).then((json) => {
        if (!json.errorObject) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    })
  }

  searchProducts (search, start, count, ordering) {
    return new Promise((resolve, reject) => {
      HTTP.get(HTTP.addParameters(GET_CATEGORY_PRODUCTS, {search, start, count, ordering})).then((json) => {
        if (!json.errorObject) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    })
  }
}

export default Product
