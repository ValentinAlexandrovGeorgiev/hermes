import React from 'react'
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
    <div>
      <span>Цена: </span>
      <span>{price}</span>
      <span>{CURRENCIES[currency]}</span>
    </div>
  )
}
