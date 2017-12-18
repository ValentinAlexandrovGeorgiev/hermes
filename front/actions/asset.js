import Hermes from 'sources'
import _ from 'lodash'
import {
  GET_ASSETS
} from './const'

export function getAsset (ids = []) {
  return (dispatch, nextState) => {
    const arrayIDs = _.isArray(ids) ? ids : [ids]
    return Hermes.Asset.getByIDs(arrayIDs).then((json) => {
      let assets = nextState().asset_information
      json.map((asset) => {
        const assetID = asset.query_field
        assets[assetID] = asset
      })
      
      dispatch({
        payload: assets,
        type: GET_ASSETS
      })
    }).catch((error) => {
      console.error(error)
    })
  }
}