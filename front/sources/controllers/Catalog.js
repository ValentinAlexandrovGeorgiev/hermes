import { GET_CATEGORIES } from '../links'
import HTTP from '../HTTP'

class Catalog {
  getCategories (ids) {
    return new Promise((resolve, reject) => {
      HTTP.get(GET_CATEGORIES).then((json) => {
        if (!json.errorObject) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    })
  }
}

export default Catalog
