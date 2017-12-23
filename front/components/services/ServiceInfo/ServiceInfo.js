import React, {Component} from 'react'
import PropTypes from 'prop-types'
import translate from 'translations'
import './serviceinfo.scss'

class ServiceInfo extends Component {
  render () {
    const {
      image_link,
      body,
      title
    } = this.props.service

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
