import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { langProperty } from 'translations'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as ACTIONS from 'actions'

import './category.scss'

class Category extends Component {
  selectCategory (event, category) {
    event.preventDefault()
    const {
      actions,
      history
    } = this.props

    actions.addToBreadcrumbs(category)
    history.push(`/products/${category}`)
  }

  render () {
    const {
      category,
      selected,
      lang
    } = this.props

    const name = this.props.category[langProperty('name', lang)]

    return (
      <div className='category__wrapper'>
        <Link onClick={event => this.selectCategory(event, name)} className={`category__link${selected ? ' selected' : ''}`} to={`/products/${name}`}>
          <img src={category.image_link} alt={name} />
          <span>{ name }</span>
        </Link>
      </div>
    )
  }
}

Category.defaultProps = {
  category: {},
  selected: false
}

Category.propTypes = {
  category: PropTypes.shape({}),
  selected: PropTypes.bool
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category))
