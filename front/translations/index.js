import langs from './langs'


const translate = (key, placeholders) => {
  const lang = window.localStorage.getItem('lang')
  let translation = langs[lang][key] || ''

  translation = translation.replace('{0}', placeholders)

  return translation
}

export default translate