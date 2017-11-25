import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as ACTIONS from 'actions'

const LANGUAGES = [
  'bg',
  'en'
]

class Language extends Component {
  componentWillMount () {
    let lang = window.localStorage.getItem('lang')

    if (!lang) {
      lang = LANGUAGES[0]
      window.localStorage.setItem('lang', lang)
    }

    this.props.actions.setLanguage(lang)
  }
  
  componentWillReceiveProps (nextProps) {
    if (nextProps.lang !== window.localStorage.getItem('lang')) {
      window.localStorage.setItem('lang', nextProps.lang)
    }
  }
  
  render () {
    const {
      children
    } = this.props
    return children
  }
}

Language.defaultProps = {
  lang: 'bg'
}

Language.propTypes = {
  lang: PropTypes.string
}

const mapStateToProps = (state) => {
  const props = {
    lang: state.language.lang
  }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Language)
