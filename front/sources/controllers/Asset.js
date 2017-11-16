import { TEST_LINK } from '../links'
import HTTP from '../HTTP'

class Asset {
  getByID (id) {
    return new Promise((resolve, reject) => {
      HTTP.get(HTTP.addParameters(TEST_LINK, id)).then(({ json, ok }) => {
        if (ok) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    })
  }

  getAssetsByID (ids) {
    return new Promise((resolve, reject) => {
      const idsParam = ids.join(',')
      HTTP.get(HTTP.addParameters(TEST_LINK, {ids: `(${idsParam})`})).then(({ json, ok }) => {
        if (ok) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    })
  }
}

export default Asset
