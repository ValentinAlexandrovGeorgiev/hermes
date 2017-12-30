import Hermes from 'sources'
import _ from 'lodash'
import {
  GET_ASSETS
} from './const'

export function getAsset (ids = []) {
  return (dispatch, nextState) => {
    const arrayIDs = _.isArray(ids) ? ids : [ids]

    return Hermes.Asset.getByIDs(arrayIDs).then((assets) => {
      dispatch({
        payload: assets,
        type: GET_ASSETS
      })
    })
  }
}
