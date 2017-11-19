import React from 'react'
import './productid.scss'

export default function ProductId ({ productId }) {
  if (productId === '') {
  	return null
  }

  return (
    <div>
      <span>ID: </span>
      <span>{productId}</span>
    </div>
  )
}
