import { combineReducers } from 'redux'
import routerReducer from './routerReducer'
import product from './product'
import asset from './asset'
import utils from './utils'

const reducers = {
  router: routerReducer,
  product_information: product,
  asset_information: asset,
  language: utils
}

const combined = combineReducers(reducers)

module.exports = combined
