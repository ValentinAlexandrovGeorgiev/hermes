import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'

class Footer extends Component {
  render () {
    return (
      <div className='footer__wrapper'>
        <div className='footer__item'>
          <Link to='/products'>Продукти</Link>
        </div>
        <div className='footer__item'>
          <Link to='/services'>Печатница</Link>
        </div>
        <div className='footer__item'>
          <Link to='/catalogs'>Каталози</Link>
        </div>
        <div className='footer__item'>
          <Link to='/for-us'>За нас</Link>
        </div>
        <div className='footer__facebook_wrapper'>

        </div>
      </div>
    )
  }
}

export default Footer
