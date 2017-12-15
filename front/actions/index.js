import {
  getProduct,
  getCategoryProducts
} from './product'

import {
  getCategories,
  getCatalogs
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
  getCatalogs,
  setLanguage
}

module.exports = actions
