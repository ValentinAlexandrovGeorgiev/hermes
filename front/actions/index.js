import {
  getProduct,
  getCategoryProducts,
  search
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
  search,
  setLanguage
}

module.exports = actions
