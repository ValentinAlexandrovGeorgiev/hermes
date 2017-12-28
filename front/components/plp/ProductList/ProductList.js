import React, { Component } from 'react'
import ProductTile from '../ProductTile/ProductTile'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import * as ACTIONS from 'actions'
import { connect } from 'react-redux'
import './productlist.scss'

class ProductList extends Component {
  constructor () {
    super()

    this.state = {
      loading: true
    }
  }

  componentWillMount () {
    const {
      actions,
      currentPage,
      category
    } = this.props
    const start = currentPage <= 1 ? 0 : (currentPage - 1) * 12  
    if (category) {
      actions.getCategoryProducts(category, start , 12)
    }
  }

  componentWillReceiveProps (nextProps) {
    const {
      actions,
      category
    } = nextProps

    if (category && this.props.category !== nextProps.category) {
      actions.getCategoryProducts(category, 0, 12)
    }
  }

  render() {
    const {
      products
    } = this.props
    const { loading } = this.state
    
    if (products === null) {
      return (
        <div className='loader'>
          Loading...
        </div>
      )
    }

    if (products.length === 0) {
      return (
        <div className='no-products'>
          Sorry, there are no products
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
      products
    } = this.props

    return products.map((product, index) => {
      return (
        <div key={`${product.name}_${index}`} className="col col-xs-100 col-md-50 col-lg-33 col-big-25">
          <ProductTile {...product} />
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
    products: state.product_information.products
  }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
