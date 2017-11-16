import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './statistics.scss'

class Statistics extends Component {
  render () {
    return (
      <div className='statistics__wrapper'>
        <h1>{'Хермес Гифт'}</h1>
        <div className='statistics__item col col-xs-100 col-md-33'>
          <Link className='statistics__link' to='/products'>
            <div className='statistics__number'>
              <div className='statistics__outer'>
                {'4000'}
              </div>
            </div>
            <p className='statistics__label'>{'Продукти на склад'}</p>
          </Link>
        </div>
        <div className='statistics__item col col-xs-100 col-md-33'>
          <Link className='statistics__link' to='/catalogs'>
            <div className='statistics__number'>
              <div className='statistics__outer'>
                {'50 000'}
              </div>
            </div>
            <p className='statistics__label'>{'Продукти, внос от Европа'}</p>
          </Link>
        </div>
        <div className='statistics__item col col-xs-100 col-md-33'>
          <Link className='statistics__link' to='/services'>
            <div className='statistics__number'>
              <div className='statistics__outer'>
                {'17'}
              </div>
            </div>
            <p className='statistics__label'>{'Печатни услуги'}</p>
          </Link>
        </div>
      </div>
    )
  }
}

export default Statistics
