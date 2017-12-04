import {
  getProduct,
  getCategoryProducts
} from './product'

import {
  getCategories
} from './catalog'

import {
  getAsset
} from './asset'

import {
  setLanguage
} from './utils'

const actions = {
  getProduct,
  getCategoryProducts,
  getAsset,
  getCategories,
  setLanguage
}

module.exports = actions
