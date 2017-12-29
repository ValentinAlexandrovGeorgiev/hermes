import translate from 'translations'
import {
  ADD_TO_BREADCRUMBS
} from './const'

export function addToBreadcrumbs (category) {
  return (dispatch, nextState) => {
  	const defaultBreadcrumbs = category ? [translate('plp.home')] : []
  	let breadcrumbs = nextState().breadcrumbs_information.breadcrumbs 
  	breadcrumbs = breadcrumbs && breadcrumbs.length > 0 ? breadcrumbs : defaultBreadcrumbs
 	
  	const index = breadcrumbs.indexOf(category)
  	if (breadcrumbs.length > 1 && index >= 0) {
  	  breadcrumbs.splice(index, 1)
  	} else if (breadcrumbs.length === 3) {
  	  breadcrumbs.splice(1, 1)
  	}
  	if (category) {
	  breadcrumbs = [...breadcrumbs, category]
  	}
	dispatch({
	  payload: breadcrumbs,
	  type: ADD_TO_BREADCRUMBS
    })
  }
}