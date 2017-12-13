import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as ACTIONS from 'actions'

import './category.scss'

class Category extends Component {
  selectCategory (event, category) {
    event.preventDefault()
    const {
      actions
    } = this.props

    actions.addToBreadcrumbs(category)
  }

  render () {
    const {
      category,
      selected
    } = this.props

    return (
      <div className='category__wrapper'>
        <Link onClick={(event) => this.selectCategory(event, category.name)} className={`category__link${selected ? ' selected' : ''}`} to={`/products/${category.name}`}>
          <img src={category.image_link} alt={category.name} />
          <span>{ category.name }</span>
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

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(null, mapDispatchToProps)(Category)
