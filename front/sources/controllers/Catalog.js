import { TEST_LINK } from '../links'
import HTTP from '../HTTP'

class Catalog {
  getAllOnline () {
    return new Promise((resolve, reject) => {
      HTTP.get(TEST_LINK).then(({ json, ok }) => {
        if (ok) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    })
  }
}

export default Catalog
