import React from 'react'
import './productmainimage.scss'

export default function ProductMainImage ({ image, name }) {
  const mainImage = image || '/static/images/default.png'

  return (
    <div>
      <img src={mainImage} alt={name} />
    </div>
  )
}
