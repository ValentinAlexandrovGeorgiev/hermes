import Hermes from 'sources'
import _ from 'lodash'
import {
  GET_ASSET
} from './const'

export function getAsset (id = '') {
  return (dispatch, nextState) => {
    return Hermes.Asset.getByID(id).then((json) => {
      let assets = nextState().asset_information
      const assetID = json.asset_id
      assets[assetID] = json
      
      dispatch({
        payload: assets,
        type: GET_ASSET
      })
    }).catch((error) => {
      console.error(error)
    })
  }
}