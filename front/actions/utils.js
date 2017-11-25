import {
  SET_LANGUAGE
} from './const'

export function setLanguage (lang) {
  return (dispatch) => {
    dispatch({
      payload: lang,
      type: SET_LANGUAGE
    })
  }
}
