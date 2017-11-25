import React from 'react'
import translate from 'translations'
import './productdescription.scss'

export default function ProductDescription ({ description }) {
  if (!description) {
  	return null
  }
  
  return (
    <div className='pdp__product-description'>
      <span className='description-label'>{translate('pdp.description')}</span>
      <p className='description-value'>{description}</p>
    </div>
  )
}
