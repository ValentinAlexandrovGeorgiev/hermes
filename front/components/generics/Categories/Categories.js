import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

class Categories extends Component {
  renderCategories (categories) {
    const keys = Object.keys(categories)

    return keys.map((key) => {
      let category = categories[key]
      
      return (
        <div key={category.category_id}>
          { this.renderChildPlus(category.category_id) }
          {category.name}
          { this.renderChildrenCategories(category.category_id) }
        </div>
      )
    })
  }

  renderChildrenCategories (parentID) {
    const {
      childCategories
    } = this.props

    if (!childCategories[parentID]) {
      return null
    }

    return childCategories[parentID].map((category) => {
      return (
        <div key={category.category_id}>
          {category.name}
        </div>
      )
    })
  }

  renderChildPlus (parentID) {
    const {
      childCategories
    } = this.props

    if (!childCategories[parentID]) {
      return null
    }

    return (
      <span>+</span>
    )
  }

  render () {
    const {
      categories
    } = this.props

    if (_.isEmpty(categories)) {
      return null
    }

    return (
      <div className='categories__wrapper'>
        {this.renderCategories(categories)}
      </div>
    )
  }
}

Categories.defaultProps = {
  categories: {},
  childCategories: {}
}

Categories.propTypes = {
  categories: PropTypes.shape({}),
  childCategories: PropTypes.shape({})
}

export default Categories

