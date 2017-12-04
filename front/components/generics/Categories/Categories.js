import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as ACTIONS from 'actions'
import _ from 'lodash'

class Categories extends Component {
  componentWillMount () {
    const {
      actions
    } = this.props
    console.log('getCategories')
    actions.getCategories()
  }

  createChildren (categories) {
    const keys = Object.keys(categories)

    return keys.map((key) => {
      let category = categories[key]
      if (category.parent_category) {

      } 
      return (
        <div key={category.category_id}>
          {category.name}
        </div>
      )
    })
  }

  render () {
    const {
      categories
    } = this.props

    console.log(categories)
    if (_.isEmpty(categories)) {
      return null
    }

    return (
      <div className='categories__wrapper'>
        {this.createChildren(categories)}
      </div>
    )
  }
}

Categories.defaultProps = {
  categories: {}
}

Categories.propTypes = {
  categories: PropTypes.shape({})
}

const mapStateToProps = (state) => {
  const props = {
    categories: state.catalog_information.categories
  }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)

