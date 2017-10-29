import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

class Header extends Component {
  render () {
    return (
      <div className='header__wrapper'>
        <div className='header__item'>
          <Link to='/products'>Продукти</Link>
        </div>
        <div className='header__item'>
          <Link to='/services'>Печатница</Link>
        </div>
        <div className='header__item'>
          <Link to='/catalogs'>Каталози</Link>
        </div>
        <div className='header__item'>
          <Link to='/for-us'>За нас</Link>
        </div>
      </div>
    )
  }
}

export default Header
