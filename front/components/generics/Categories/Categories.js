import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Category from '../Category/Category'
import _ from 'lodash'
import { translate } from 'translations'

import './categories.scss'

class Categories extends Component {
  renderCategories (categories, childCategories, selectedCategory) {
    const keys = Object.keys(categories)

    let selectedCategoryID = null
    keys.forEach((key) => {
      if (categories[key].name === selectedCategory) {
        selectedCategoryID = key
      }
    })

    if (!childCategories[selectedCategoryID]) {
      return null
    }

    return childCategories[selectedCategoryID].map((category) => {
      const selected = selectedCategory === category.name

      return (
        <Category key={category.category_id} category={category} selected={selected} />
      )
    })
  }

  render () {
    const {
      categories,
      childCategories,
      selectedCategory
    } = this.props

    if (_.isEmpty(categories)) {
      return null
    }
    const children = this.renderCategories(categories, childCategories, selectedCategory)

    return (
      <div className='categories__wrapper'>
        { children
          ? <div>
              <span className='children-label'>{translate('children.label')}</span>
              {children}
            </div>
          : null
        }
      </div>
    )
  }
}

Categories.defaultProps = {
  categories: {},
  childCategories: {},
  selectedCategory: ''
}

Categories.propTypes = {
  categories: PropTypes.shape({}),
  childCategories: PropTypes.shape({}),
  selectedCategory: PropTypes.string
}

export default Categories
