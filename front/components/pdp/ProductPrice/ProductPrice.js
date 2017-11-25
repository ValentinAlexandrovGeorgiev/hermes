import React from 'react'
import translate from 'translations'
import './productprice.scss'

const CURRENCIES = {
  'USD': '$',
  'EUR': '€',
  'BGN': 'лв'
}

export default function ProductPrice ({ price, currency }) {
  if (price === '') {
  	return null
  }

  return (
    <div className='price-inner-wrapper'>
      <span className='price-label'>{translate('pdp.price')}</span>
      <span className='price-value'>{price}</span>
      <span className='price-currency'>{CURRENCIES[currency]}</span>
    </div>
  )
}
