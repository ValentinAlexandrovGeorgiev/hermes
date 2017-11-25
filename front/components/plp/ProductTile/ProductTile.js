import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import './producttile.scss'

const CURRENCIES = {
  'USD': '$',
  'EUR': '€',
  'BGN': 'лв'
}

class ProductTile extends Component {
  render () {
    const {
      name,
      price,
      currency,
      product_id,
      image_link
    } = this.props

    const currencySymbol = currency ? CURRENCIES[currency] : CURRENCIES.BGN
    // image_link || '/static/images/default.png'
    return (
      <Link to={`/product/${_.kebabCase(name)}/${product_id}`}>
        <div className='tile__wrapper'>
          <img className='tile__image' src={'/static/images/default.png'} />
          <div className='tile__info'>
            <span className='name'>{name}</span>
            <div className='price_id'>
              <span className='product_id'>{`ID: ${product_id}`}</span>
              <span className='product_price'>
                {price}
                <span className='product_currency'>{currencySymbol}</span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default ProductTile
