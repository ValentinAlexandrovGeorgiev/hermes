import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import SearchInput from '../SearchInput/SearchInput'
import { connect } from 'react-redux'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import MobileMenu from '../MobileMenu/MobileMenu'
import translate from 'translations'
import './header.scss'

const PAGES = {
  services: 'services',
  catalogs: 'catalogs',
  forus: 'forus'
}


class Header extends Component {
  constructor () {
    super()

    this.state = {
      selected: false,
      openMobileMenu: false
    }

    this.openMobileMenu = this.openMobileMenu.bind(this)
    this.closeMobileMenu = this.closeMobileMenu.bind(this)
  }

  returnSelectedClass () {
    const {
      location
    } = this.props

    switch (location.pathname) {
      case '/services': return PAGES.services
      case '/catalogs': return PAGES.catalogs
      case '/for-us': return PAGES.forus
      default: return ''
    }
  }

  renderCategories (categories) {
    if (!categories) {
      return null
    }

    const keys = Object.keys(categories)

    return keys.map((key) => {
      const category = categories[key]
      return (
        <Link key={key} to={`/products/${category.name}`}>{category.name}</Link>
      )
    })
  }

  openMobileMenu () {
    this.setState({
      openMobileMenu: true
    })
  }

  closeMobileMenu () {
    this.setState({
      openMobileMenu: false
    })
  }

  render () {
    const {
      categories,
      childCategories
    } = this.props
    const { openMobileMenu } = this.state
    const selected = this.returnSelectedClass()

    return (
      <div className='header__wrapper'>
        <img onClick={this.openMobileMenu} className='header__mobile-menu' alt='mobile menu hermes gift' src='/static/icons/menu.svg' />
        { openMobileMenu ? <MobileMenu categories={categories} childCategories={childCategories} closeMobileMenu={this.closeMobileMenu} /> : null }
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
            <img src='/static/images/hermes-logo.svg' alt='hermes gift logo' />
            <p className='header__logo_message'>
              {translate('header.logo')}
            </p>
          </Link>
          <SearchInput />
          <LanguageSelector />
        </div>
        <div className='header__nav-links col-xs-100 col-md-100 col-lg-70'>
          {this.renderCategories(categories)}
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  const props = {
    categories: state.catalog_information.categories,
    childCategories: state.catalog_information.childCategories
  }
  return props
}

export default withRouter(connect(mapStateToProps)(Header))
