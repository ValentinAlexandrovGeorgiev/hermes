import { GET_ASSETS } from '../links'
import HTTP from '../HTTP'

class Asset {
  getByIDs (ids) {
    return new Promise((resolve, reject) => {
      HTTP.get(HTTP.addParameters(GET_ASSETS, {many: ids.join(',')})).then((json) => {
        if (!json.errorObject) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    })
  }
}

export default Asset
