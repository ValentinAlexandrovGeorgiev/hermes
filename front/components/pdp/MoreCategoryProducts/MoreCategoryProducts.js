import React from 'react'
import Slider from 'react-slick'
import { NextArrow, PrevArrow } from 'components/generics/CarouselArrows/CarouselArrows'
import ProductTile from 'components/plp/ProductTile/ProductTile'
import { translate } from 'translations'
import './morecategoryproducts.scss'

const CAROUSEL_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [ {
    breakpoint: 760,
    settings: {
      arrows: false
    }
  }]
}

export default function MoreCategoryProducts ({ products, id }) {
  return (
    <div className='pdp__more-products'>
      <h3 className='more-products-label'>{translate('pdp.more.products')}</h3>
      <div>
      	<Slider {...CAROUSEL_SETTINGS}>
          {loadCarousel(products, id)}
        </Slider>
      </div>
    </div>
  )
}

function loadCarousel (products, id) {
  return products.map((p) => {
    if (id === p.product_id) {
      return null
    }
  	return (
      <div key={`${p.product_id}-${p.id}`} className='carousel-item'>
        <ProductTile {...p} />
      </div>
    )
  })
}
