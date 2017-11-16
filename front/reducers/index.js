import { combineReducers } from 'redux'
import routerReducer from './routerReducer'

const reducers = {
  router: routerReducer
}

const combined = combineReducers(reducers)

module.exports = combined
