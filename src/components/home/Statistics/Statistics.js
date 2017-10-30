import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './statistics.scss'

class Statistics extends Component {

  render() {
    return (
      <div className='statistics__wrapper'>
        <div className='statistics__item col col-xs-100 col-md-33'>
          <Link className='statistics__link' to='/products'>
            <span className='statistics__number'>{'4000'}</span>
            <p className='statistics__label'>{'Продукти на склад'}</p>
          </Link>
        </div>
        <div className='statistics__item col col-xs-100 col-md-33'>
          <Link className='statistics__link' to='/catalogs'>
            <span className='statistics__number'>{'50 000'}</span>
            <p className='statistics__label'>{'Продукти, внос от Европа'}</p>
          </Link>
        </div>
        <div className='statistics__item col col-xs-100 col-md-33'>
          <Link className='statistics__link' to='/services'>
            <span className='statistics__number'>{'17'}</span>
            <p className='statistics__label'>{'Печатни услуги'}</p>
          </Link>
        </div>
      </div>
    )
  }
}

export default Statistics

