import React, { Component } from 'react'
import ProductTile from '../ProductTile/ProductTile'
import { Link } from 'react-router-dom'
import { translate, langProperty } from 'translations'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import * as ACTIONS from 'actions'
import { connect } from 'react-redux'
import './productlist.scss'

class ProductList extends Component {
  componentWillMount () {
    const {
      actions,
      currentPage,
      category,
      ordering
    } = this.props
    const start = currentPage <= 1 ? 0 : (currentPage - 1) * 12  
    if (category) {
      actions.getCategoryProducts(category, start , 12, ordering)
    }
  }

  componentWillReceiveProps (nextProps) {
    const {
      actions,
      category,
      ordering
    } = nextProps

    if (category && this.props.category !== nextProps.category) {
      actions.getCategoryProducts(category, 0, 12, ordering)
    }
  }

  renderChildCategories (category) {
    const {
      childCategories,
      categories,
      lang
    } = this.props
    const keys = Object.keys(categories)

    let selectedCategoryID = null
    keys.forEach((key) => {
      if (categories[key].name === category) {
        selectedCategoryID = key
      }
    })

    if (!childCategories[selectedCategoryID]) {
      return null
    }

    return childCategories[selectedCategoryID].map((category) => {
      const name = category[langProperty('name', lang)]

      return (
        <div key={category.category_id} className='no-products-category col col-xs-100 col-md-50 col-lg-33'>
          <div>
            <Link to={`/products/${name}`}>
              <img src={category.image_link} alt={name} />
              <p>{name}</p>
            </Link>
          </div>
        </div>
      )
    })
  }

  render() {
    const {
      products,
      category
    } = this.props
    
    if (products === null) {
      return (
        <div className='loader'>
          Loading...
        </div>
      )
    }

    if (products.length === 0) {
      const children = this.renderChildCategories(category)
      return (
        <div className='no-products'>
          <div className='no-products-grid'>
            { children 
              ? <span className='no-products-title'>{translate('plp.noproducts.title', category)}</span>
              : <span className='no-products-title'>{translate('plp.noproducts.label', category)}</span>
            }
            { children }
          </div>
        </div>
      )
    }

    return (
      <div className="product_list__wrapper">
        {this.renderProducts()}
      </div>
    )
  }

  renderProducts() {
    const {
      products,
      lang
    } = this.props

    return products.map((product, index) => {
      return (
        <div key={`${product.name}_${index}`} className="col col-xs-100 col-md-50 col-lg-33 col-big-25">
          <ProductTile {...product} lang={lang} />
        </div>
      )
    })
  }
}

ProductList.defaultProps = {
  products: null
}

ProductList.propTypes = {
  products: PropTypes.array
}

const mapStateToProps = state => {
  const props = {
    products: state.product_information.products,
    lang: state.language.lang
  }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
