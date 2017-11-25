import { GET_ASSET } from '../links'
import HTTP from '../HTTP'

class Asset {
  getByID (id) {
    return new Promise((resolve, reject) => {
      HTTP.get(`${GET_ASSET}${id}`).then((json) => {
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
