import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { translate } from 'translations'
import './footer.scss'

class Footer extends Component {
  render () {
    return (
      <div className='footer__wrapper'>
        <div className='col col-xs-100 col-md-33 footer__column'>
          <div className='footer__item'>
            <Link to='/services'>{translate('header.services')}</Link>
          </div>
          <div className='footer__item'>
            <Link to='/for-us'>{translate('header.forus')}</Link>
          </div>
        </div>
        <div className='col col-xs-100 col-md-33 footer__column'>
          <div className='footer__item'>
            <Link to='/catalogs'>{translate('header.catalogs')}</Link>
          </div>
        </div>
        <p className='footer__rights'>
          {translate('footer.rights')}
        </p>
      </div>
    )
  }
}

export default Footer
