import React, { Component } from 'react'
import ProductTile from '../ProductTile/ProductTile'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './productlist.scss'

class ProductList extends Component {
  render() {
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
    console.log(products)
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
  products: []
}

ProductList.propTypes = {
  products: PropTypes.array
}

const mapStateToProps = state => {
  const props = {
    products: state.products
  }
  return props
}

export default connect(mapStateToProps)(ProductList)
