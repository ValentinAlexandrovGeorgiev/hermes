import React, { Component } from 'react'
import Slider from 'react-slick'
import { NextArrow, PrevArrow } from 'components/generics/CarouselArrows/CarouselArrows'
import './homecarousel.scss'

const CAROUSEL_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
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

class HomeCarousel extends Component {
  render () {
    return (
      <div className='home-carousel__container'>
        <div className='home-carousel__wrapper'>
          <Slider {...CAROUSEL_SETTINGS}>
            <div>
              <img src='static/images/banners/JHK.png' />
            </div>
            <div>
              <img src='static/images/banners/keya.png' />
            </div>
            <div>
              <img src='static/images/banners/mouses.png' />
            </div>
          </Slider>
        </div>
      </div>
    )
  }
}

export default HomeCarousel
