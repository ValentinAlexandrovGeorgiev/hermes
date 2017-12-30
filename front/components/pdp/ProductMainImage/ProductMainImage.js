import React from 'react'
import './productmainimage.scss'

export default function ProductMainImage ({ image, name }) {
  const mainImage = image || '/static/images/default.png'
  // const mainImage = '/static/images/default.png'

  return (
    <div className='pdp__product-image'>
      <img src={mainImage} alt={name} />
    </div>
  )
}
