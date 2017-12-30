import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { translate, langProperty } from 'translations'
import './serviceinfo.scss'

class ServiceInfo extends Component {
  render () {
    const {
      image_link
    } = this.props.service

    const body = this.props.service[langProperty('body', this.props.lang)]
    const title = this.props.service[langProperty('title', this.props.lang)]

    return (
      <div className='service__wrapper'>
        <h3 className='service__title'>{title}</h3>
        <div className='col col-xs-100 col-md-40'>
          <img className='service__image' src={image_link} alt={title} />
        </div>
        <div className='col col-xs-100 col-md-60 service__body'>
          <span className='service__description'>{translate('service.description')}</span>
          <div dangerouslySetInnerHTML={{__html: body}} />
        </div>
      </div>
    )
  }
}

ServiceInfo.defaultProps = {
  service: {
    body: '',
    image_link: '',
    title: ''
  }
}

ServiceInfo.propTypes = {
  service: PropTypes.shape({
    body: PropTypes.string,
    image_link: PropTypes.string,
    title: PropTypes.string
  })
}

export default ServiceInfo
