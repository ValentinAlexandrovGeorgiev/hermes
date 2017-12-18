import { combineReducers } from 'redux'
import routerReducer from './routerReducer'
import product from './product'
import catalog from './catalog'
import asset from './asset'
import breadcrumbs from './breadcrumbs'
import utils from './utils'

const reducers = {
  router: routerReducer,
  product_information: product,
  asset_information: asset,
  catalog_information: catalog,
  breadcrumbs_information: breadcrumbs,
  language: utils
}

const combined = combineReducers(reducers)

module.exports = combined
