import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Category from '../Category/Category'
import _ from 'lodash'

import './categories.scss'

class Categories extends Component {
  renderCategories (categories, selectedCategory) {
    const keys = Object.keys(categories)

    return keys.map((key) => {
      let category = categories[key]
      const selected = selectedCategory === category.name

      return (
        <Category key={category.category_id} category={category} selected={selected} />
      )
    })
  }

  render () {
    const {
      categories,
      selectedCategory
    } = this.props

    if (_.isEmpty(categories)) {
      return null
    }

    return (
      <div className='categories__wrapper'>
        {this.renderCategories(categories, selectedCategory)}
      </div>
    )
  }
}

Categories.defaultProps = {
  categories: {},
  selectedCategory: ''
}

Categories.propTypes = {
  categories: PropTypes.shape({}),
  selectedCategory: PropTypes.string
}

export default Categories

