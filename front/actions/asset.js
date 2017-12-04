import Hermes from 'sources'
import {
  GET_ASSETS
} from './const'

export function getAsset (ids = []) {
  return (dispatch, nextState) => {
    return Hermes.Asset.getByIDs([ids]).then((json) => {
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