import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { translate } from 'translations'
import './mobilemenu.scss'

class MobileMenu extends Component {
  renderCategories () {
    const {
      categories,
      childCategories
    } = this.props

    const keys = Object.keys(categories)
    return keys.map((key) => {
      let components = []

      components.push(
        <li className='mobile-menu__category' key={`${key}-${categories[key].name}`}>
          <Link to={`/products/${categories[key].name}`}>{categories[key].name}</Link>
        </li>
      )

      if (childCategories[key]) {
        childCategories[key].map((child) => {
          components.push(
            <li className='mobile-menu__child-category' key={`${child['category_id']}-${child['name']}`}>
              <Link to={`/products/${child['name']}`}>{child['name']}</Link>
            </li>
          )
        })
      }
      return components
    })
  }

  render () {
    const {
      closeMobileMenu
    } = this.props

    return (
      <div className='mobile-menu'>
        <h1>{translate('hermes.gift')}</h1>
        <p>{translate('header.logo')}</p>
        <span className='mobile-menu__quit' onClick={() => closeMobileMenu()}>{translate('close')}</span>
        <ul>
          <li className='mobile-menu__link'>
            <Link to='/services'>{translate('header.services')}</Link>
          </li>
          <li className='mobile-menu__link'>
            <Link to='/catalogs'>{translate('header.catalogs')}</Link>
          </li>
          <li className='mobile-menu__link last'>
            <Link to='/for-us'>{translate('header.forus')}</Link>
          </li>
          {this.renderCategories()}
        </ul>
      </div>
    )
  }
}

export default MobileMenu