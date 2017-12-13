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
  addToBreadcrumbs
} from './breadcrumbs'

import {
  setLanguage
} from './utils'

const actions = {
  getProduct,
  getCategoryProducts,
  getAsset,
  getCategories,
  addToBreadcrumbs,
  setLanguage
}

module.exports = actions
