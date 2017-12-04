import Hermes from 'sources'
import {
  GET_CATEGORIES
} from './const'

export function getCategories () {
  return (dispatch, nextState) => {
    return Hermes.Catalog.getCategories().then((json) => {
      console.log(json)
      let categories = nextState().catalog_information
      json.map((category) => {
        const categoryID = category.category_id
        categories[categoryID] = category
      })
      
      dispatch({
        payload: categories,
        type: GET_CATEGORIES
      })
    }).catch((error) => {
      console.error(error)
    })
  }
}