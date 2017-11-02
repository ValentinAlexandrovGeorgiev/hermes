import React, { Component } from 'react'
import './producttile.scss'

class ProductTile extends Component {

  render () {
    const {
      name,
      price,
      currency,
      product_id,
      image_link
    } = this.props

    return (
      <div className='tile__wrapper'>
        <span>
          <img className='tile__image' src={image_link || 'images/default.png'} />
        </span>
        <div>
          <span>{name}</span>
          <div>
            <span>{product_id}</span>

            <div>
              <span>{price}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductTile
