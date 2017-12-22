import React, {Component} from 'react'
import PropTypes from 'prop-types'
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
        <h3>{title}</h3>
        <img src={image_link} alt={title} />
        <div dangerouslySetInnerHTML={{__html: body}} />
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
