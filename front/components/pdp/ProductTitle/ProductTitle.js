import React from 'react'
import './producttitle.scss'

export default function ProductTitle ({ name }) {

  if (!name) {
    return null
  }

  return (
    <div className='pdp__product-title'>
      <h1 className='title'>{name}</h1>
    </div>
  )
}
