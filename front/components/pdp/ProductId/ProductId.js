import React from 'react'
import translate from 'translations'
import './productid.scss'

export default function ProductId ({ productId }) {
  if (productId === 0) {
  	return null
  }

  return (
    <div className='pdp__product-id'>
      <span className='id-label'>{translate('pdp.id')}</span>
      <span className='id-value'>{productId}</span>
    </div>
  )
}
