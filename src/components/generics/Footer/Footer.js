import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'

const FB_STYLE = {
  border: 'none',
  overflow: 'hidden'
}
class Footer extends Component {
  render () {
    return (
      <div className='footer__wrapper'>
        <div className='col col-xs-100 col-md-33 footer__column'>
          <div className='footer__item'>
            <Link to='/products'>Продукти</Link>
          </div>
          <div className='footer__item'>
            <Link to='/services'>Печатница</Link>
          </div>
        </div>
        <div className='col col-xs-100 col-md-33 footer__column'>
          <div className='footer__item'>
            <Link to='/catalogs'>Каталози</Link>
          </div>
          <div className='footer__item'>
            <Link to='/for-us'>За нас</Link>
          </div>
        </div>
        <div className='col col-xs-100 col-md-33 footer__fb_plugin'>
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhermesgift&width=340&height=250&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1723121821304727" width="340" height="250" style={FB_STYLE} scrolling="no" frameBorder="0" allowTransparency="true"></iframe>
        </div>
        <p className='footer__rights'>
          {'© 2014-2017 Hermesgift. Всички права са запазени!'}
        </p>
      </div>
    )
  }
}

export default Footer
