import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ACTIONS from 'actions'
import Dropdown from '../Dropdown/Dropdown'
import './languageselector.scss'

const LANGUAGES = [
  'bg',
  'en'
]

class LanguageSelector extends Component {
  constructor (props) {
    super()

    this.state = {
      open: false,
      lang: props.lang === LANGUAGES[0] ? LANGUAGES[1] : LANGUAGES[0]
    }

    this.changeLanguage = this.changeLanguage.bind(this)
  }

  changeLanguage () {
    const {
      lang
    } = this.state
 
    this.props.actions.setLanguage(lang === LANGUAGES[0] ? LANGUAGES[0] : LANGUAGES[1])

    this.setState({
      lang: lang === LANGUAGES[0] ? LANGUAGES[1] : LANGUAGES[0]
    })
  }

  render () {
    const {
      lang
    } = this.state

    return (
      <div onClick={this.changeLanguage} className='lang__wrapper'>
        <img className='active-lang' src={`/static/icons/${lang}.svg`} alt={`${lang} language`} />
      </div>
    )
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector)
