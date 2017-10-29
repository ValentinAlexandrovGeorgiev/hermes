import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './header.scss'

const PAGES = {
  products: 'products',
  services: 'services',
  catalogs: 'catalogs',
  forus: 'forus'
}

class Header extends Component {
  constructor () {
    super()

    this.state = {
      selected: false
    }
  }

  returnSelectedClass () {
    const {
      location
    } = this.props

    switch(location.pathname) {
      case '/products': return PAGES.products
      case '/services': return PAGES.services
      case '/catalogs': return PAGES.catalogs
      case '/for-us': return PAGES.forus
      default: return ''
    }

  }

  render () {
    const selected = this.returnSelectedClass()

    return (
      <div className='header__wrapper'>
        <div className='header__logo'>
          <Link to='/'>
            <img src='images/hermes-logo.png' />
          </Link>
          <p className='header__logo_message'>
            {'- Лидерът в предметната реклама!'}
          </p>
        </div>
        <div className='header__nav'>
          <div className={`header__item ${selected === PAGES.products ? 'selected' : ''}`}>
            <Link to='/products'>{'Продукти'}</Link>
          </div>
          <div className={`header__item ${selected === PAGES.services ? 'selected' : ''}`}>
            <Link to='/services'>{'Печатница'}</Link>
          </div>
          <div className={`header__item ${selected === PAGES.catalogs ? 'selected' : ''}`}>
            <Link to='/catalogs'>{'Каталози'}</Link>
          </div>
          <div className={`header__item ${selected === PAGES.forus ? 'selected' : ''}`}>
            <Link to='/for-us'>{'За нас'}</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
