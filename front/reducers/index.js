import { combineReducers } from 'redux'
import routerReducer from './routerReducer'
import product from './product'

const reducers = {
  router: routerReducer,
  product_information: product
}

const combined = combineReducers(reducers)

module.exports = combined
