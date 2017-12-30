import langs from './langs'

const translate = (key, placeholders) => {
  const lang = window.localStorage.getItem('lang')
  let translation = langs[lang][key] || ''

  translation = translation.replace('{0}', placeholders)

  return translation
}

const langProperty = (key, lang) => {
  if (lang === 'en') {
  	return `${key}_en`
  }

  return key
}

module.exports = {
  translate,
  langProperty
}