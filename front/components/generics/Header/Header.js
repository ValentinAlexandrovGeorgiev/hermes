import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import SearchInput from '../SearchInput/SearchInput'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import translate from 'translations'
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

    switch (location.pathname) {
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
        <div className='header__nav col-xs-100'>
          <div className={`header__item ${selected === PAGES.services ? 'selected' : ''}`}>
            <Link to='/services'>{translate('header.services')}</Link>
          </div>
          <div className={`header__item ${selected === PAGES.catalogs ? 'selected' : ''}`}>
            <Link to='/catalogs' className='middle'>{translate('header.catalogs')}</Link>
          </div>
          <div className={`header__item ${selected === PAGES.forus ? 'selected' : ''}`}>
            <Link to='/for-us' className='last'>{translate('header.forus')}</Link>
          </div>
        </div>
        <div className='header__logo col-xs-100 col-md-100 col-lg-30'>
          <Link to='/'>
            <img src='/static/images/hermes-logo.webp' alt='hermes gift logo' />
            <p className='header__logo_message'>
              {translate('header.logo')}
            </p>
          </Link>
          <SearchInput />
          <LanguageSelector />
        </div>
        <div className='header__nav-links col-xs-100 col-md-100 col-lg-70'>
          <Link to='/products/Химикалки'>Химикалки</Link>
          <Link to='/products/Запалки'>Запалки</Link>
          <Link to='/products/Шапки'>Шапки</Link>
          <Link to='/products/Промоции'>Промоции</Link>
          <Link to='/products/Други'>Други</Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
