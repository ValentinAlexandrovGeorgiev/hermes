import React, { Component } from 'react'
import ProductTile from '../ProductTile/ProductTile'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './productlist.scss'
import mockData from './mock_data.js'

class ProductList extends Component {
  render () {
    return (
      <div className='product_list__wrapper'>
        { this.renderProducts() }
      </div>
    )
  }

  renderProducts () {
    return mockData.map((product, index) => {
      return (
        <div key={`${product.name}_${index}`} className='col col-xs-100 col-md-50 col-lg-33 col-big-25'>
          <ProductTile {...product} />
        </div>
      )
    })
  }
}

ProductList.propTypes = {
  products: PropTypes.array
}

const mapStateToProps = (state) => {
  const props = {
    products: state.products
  }
  return props
}

export default connect(mapStateToProps)(ProductList)
