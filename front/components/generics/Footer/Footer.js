import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import translate from 'translations'
import './footer.scss'

const FB_STYLE = {
  border: 'none',
  overflow: 'hidden',
  width: 350,
  height: 250
}

class Footer extends Component {
  constructor () {
    super()

    this.state = {
      fbPopup: null
    }
  }

  componentDidMount () {
    // const fbPopup = (
    //   <div className='col col-xs-100 col-md-33 footer__fb_plugin'>
    //     <iframe src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhermesgift&width=340&height=250&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1723121821304727' style={FB_STYLE} scrolling='no' frameBorder='0' allowtransparency='true' title='hermes gift facebook page' />
    //   </div>
    // )

    // this.setState({
    //   fbPopup
    // })
  }

  render () {
    const {
      fbPopup
    } = this.state

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
        { fbPopup }
        <p className='footer__rights'>
          {translate('footer.rights')}
        </p>
      </div>
    )
  }
}

export default Footer
