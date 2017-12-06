import Hermes from 'sources'
import {
  GET_CATEGORIES
} from './const'

export function getCategories () {
  return (dispatch, nextState) => {
    return Hermes.Catalog.getCategories().then((json) => {
      let catalog_information = nextState().catalog_information
      catalog_information.categories = {}
      catalog_information.childCategories = {}

      json.forEach((category) => {
        const categoryID = category.category_id
        if (category.parent_category) {
          catalog_information.childCategories[category.parent_category] = catalog_information.childCategories[category.parent_category] || []
          catalog_information.childCategories[category.parent_category] = [...catalog_information.childCategories[category.parent_category], category]
        } else {
          catalog_information.categories[categoryID] = category
          catalog_information.categories[categoryID].hasChildren = category.parent_category !== null
        }
      })
      
      dispatch({
        payload: catalog_information.categories,
        type: GET_CATEGORIES
      })
    }).catch((error) => {
      console.error(error)
    })
  }
}